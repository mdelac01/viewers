import React from 'react';
import getSopClassHandlerModule from './getSopClassHandlerModule';
import { id } from './id';

const Component = React.lazy(() => {
  return import(
    /* webpackPrefetch: true */ './viewports/OHIFCornerstoneVideoViewport'
  );
});

const OHIFCornerstoneVideoViewport = props => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

/**
 *
 */
export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id,

  /**
   *
   *
   * @param {object} [configuration={}]
   * @param {object|array} [configuration.csToolsConfig] - Passed directly to `initCornerstoneTools`
   */
  getViewportModule({ servicesManager, extensionManager }) {
    const ExtendedOHIFCornerstoneVideoViewport = props => {
      return (
        <OHIFCornerstoneVideoViewport
          servicesManager={servicesManager}
          extensionManager={extensionManager}
          {...props}
        />
      );
    };

    return [
      { name: 'dicom-video', component: ExtendedOHIFCornerstoneVideoViewport },
    ];
  },
  getCommandsModule({ servicesManager }) {
    return {
      definitions: {
        setToolActive: {
          commandFn: ({ toolName, element }) => {
            if (!toolName) {
              console.warn('No toolname provided to setToolActive command');
            }

            // Set same tool or alt tool
            const toolAlias = _getToolAlias(toolName);

            cornerstoneTools.setToolActiveForElement(element, toolAlias, {
              mouseButtonMask: 1,
            });
          },
          storeContexts: [],
          options: {},
        },
      },
      defaultContext: 'ACTIVE_VIEWPORT::VIDEO',
    };
  },
  getSopClassHandlerModule,
};

function _getToolAlias(toolName) {
  let toolAlias = toolName;

  switch (toolName) {
    case 'EllipticalRoi':
      toolAlias = 'SREllipticalRoi';
      break;
  }

  return toolAlias;
}
