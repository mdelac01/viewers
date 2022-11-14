window.config = {
  routerBasename: '/',
  showStudyList: true,
  servers: {
    dicomWeb: [
      {
        name: 'ORTHANC',
        wadoUriRoot: 'http://orthancUser:orthancPswd@ecoserverpy.sytes.net:8042/wado',
        qidoRoot: 'http://orthancUser:orthancPswd@ecoserverpy.sytes.net:8042/dicom-web',
        wadoRoot: 'http://orthancUser:orthancPswd@ecoserverpy.sytes.net:8042/dicom-web',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        supportsFuzzyMatching: true,
      },
    ],
  },
  i18n: {
    LOCIZE_PROJECTID: 'a8da3f9a-e467-4dd6-af33-474d582a0294',
    LOCIZE_API_KEY: null, // Developers can use this to do in-context editing. DO NOT COMMIT THIS KEY!
    USE_LOCIZE: false,
  },
};
