exports.config = {
    appInfo: {
        name: 'Fe app',
        description: 'fe app',
    },
    wrapper: {
        appFile: './app/js/app'
    },
    appConfig: {
        initCssFiles: [
            '/app/css/config.css',
        ],
        cssFiles: [
            '/app/css/fonts.css'
        ],
        overrideCssFiles: [],

        initJsFiles: [],
        jsFiles: [],

        debugCssFiles: [],
        debugJsFiles: [],

        appComponentMapping: {
            'app-main': {
                name: 'app-main',
                components: {
                    'inspector-json': {
                        name: 'inspector-json'
                    },
                    'app-error': {
                        name: 'app-error',
                        componentCssFiles: ['app-error.css'],
                    },
                    'app-loader': {
                        name: 'app-loader',
                        componentCssFiles: ['app-loader.css'],
                        components: {
                            'app-loader-spinner': {
                                name: 'app-loader-spinner'
                            },
                            'user-messages': {
                                name: 'user-messages',
                                components: {
                                    'user-messages-controls': {
                                        name: 'user-messages-controls'
                                    }
                                }
                            }
                        }
                    },
                    'app-debug': {
                        componentCssFiles: ['app-debug.css'],
                        name: 'app-debug'
                    }
                }
            }
        },

        mixinRoot: './app/js/mixin/',
        mixinExtensionRegex: /\.js$/,

        appComponentCodeRegex: /\.js$/,
        componentDirectories: {
            component: ['./app/components/app/'],
            globalComponent: ['./app/components/global/', './app/components/form'],
            modalComponent: ['./app/components/modal/']
        },

        systemHelperDirectories: [],
        helperDirectories: ['./app/js/helper/'],

        hasTrayIcon: true,
        trayData: {
            title: 'Fe app',
            icon: 'app/images/tray-icon.png',
            alticon: 'app/images/tray-icon-alternate.png',
            menus: [
                {
                    label: 'Edit configuration',
                    tooltip: 'Edit configuration',
                    type: 'normal',
                    method: 'appConfig.openConfigEditorHandler',
                    children: [
                        {
                            label: 'Open debug configuration',
                            tooltip: 'Open debug configuration',
                            type: 'normal',
                            method: 'helpers.debugHelper.openDebugConfigEditor',
                        },
                        {
                            label: 'Open user message configuration',
                            tooltip: 'Open user message configuration',
                            type: 'normal',
                            method: 'helpers.userMessageHelper.openUserMessageConfigEditor',
                        }
                    ]
                },
                {
                    label: 'Separator',
                    tooltip: 'Separator',
                    type: 'separator',
                    method: 'noop'
                },
                {
                    label: 'Close window',
                    tooltip: 'Close window',
                    type: 'normal',
                    method: 'exitApp'
                }
            ]
        },

        hasAppMenu: true,
        menuData: {
            mainItemName: 'app',
            options: {
                hideWindow: true,
                hideEdit: true
            },
            menus: [
                {
                    menuItem: {
                        label: 'App',
                        method: 'noop'
                    },
                    children: [
                        {
                            menuItem: {
                                label: 'New',
                                method: 'noop',
                                shortcut: {
                                    key: 'n',
                                    modifiers: {
                                        ctrl: true
                                    }
                                }
                            },
                            children: []
                        },
                        {
                            menuItem: {
                                label: 'Open',
                                method: 'noop',
                                shortcut: {
                                    key: 'o',
                                    modifiers: {
                                        ctrl: true
                                    }
                                }
                            },
                            children: []
                        },
                        {
                            menuItem: {
                                label: 'Edit',
                                method: 'noop',
                                shortcut: {
                                    key: 'e',
                                    modifiers: {
                                        ctrl: true
                                    }
                                }
                            },
                            children: []
                        },
                        {
                            menuItem: {
                                type: 'separator'
                            },
                            children: []
                        },
                        {
                            menuItem: {
                                label: 'Exit',
                                method: 'exitApp',
                                shortcut: {
                                    key: 'x',
                                    modifiers: {
                                        ctrl: true
                                    }
                                }
                            },
                            children: []
                        }
                    ]
                },
                {
                    menuItem: {
                        label: 'App2',
                        method: 'noop'
                    },
                    children: [
                        {
                            menuItem: {
                                label: 'New2',
                                method: 'noop',
                                shortcut: {
                                    key: 'n',
                                    modifiers: {
                                        ctrl: true,
                                        shift: true
                                    }
                                }
                            },
                            children: [
                                {
                                    menuItem: {
                                        label: 'Open2',
                                        method: 'helpers.utilHelper.noop',
                                        shortcut: {
                                            key: 'o',
                                            modifiers: {
                                                ctrl: true,
                                                shift: true
                                            }
                                        }
                                    },
                                    children: [
                                        {
                                            menuItem: {
                                                label: 'Edit2',
                                                method: 'noop',
                                                shortcut: {
                                                    key: 'e',
                                                    modifiers: {
                                                        ctrl: true,
                                                        shift: true
                                                    }
                                                }
                                            },
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    menuItem: {
                                        type: 'separator'
                                    },
                                    children: []
                                },
                                {
                                    menuItem: {
                                        label: 'Exit2',
                                        method: 'exitApp',
                                        shortcut: {
                                            key: 'x',
                                            modifiers: {
                                                ctrl: true,
                                                shift: true
                                            }
                                        }
                                    },
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        globalKeyHandlers: [
            {
                event: '_keydown',
                keyCodes: [27],
                handler: 'app.handler',
                stopPropagation: true
            }
        ],
    },

    appInstanceConfig: {},

    currentLanguage: 'sr_RS',
    currentLocale: 'sr-rs',
    allowLanguageChange: false,
    autoAddLabels: true,

    configData: {
        vars: {
        }
    },

    liveCss: true,
    compileCss: true,

    debug: {
        forceDebug: {
            App: false,
        },
    },

    userMessages: {
        forceUserMessages: {
            App: false,
        }
    },


    windowCloseTimeoutDuration: 15000,
    windowReloadTimeoutDuration: 15000,

};