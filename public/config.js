window.CONFIG = {
  macros: [
    {
      category: 'Entertainment',
      name: 'YouTube',
      triggers: [
        'y',
        'yt',
        'youtube',
      ],
      key: 'KeyY',
      icon: 'youtube',
      url: 'https://youtube.com',
      normalisedURL: 'youtube.com',
      commands: {
        go: {
          template: 'https://youtu.be/{$}',
          description: 'go to video'
        },
        search: {
          template: '{@}/results?search_query={$}'
        }
      },
      bgColor: {
        type: 'solid',
        color: '#f30002'
      },
      textColor: '#212121',
      pinned: true
    },
    {
      category: 'Social',
      name: 'Reddit',
      triggers: [
        'r',
        'rd',
        'reddit',
      ],
      key: 'KeyR',
      icon: 'reddit',
      url: 'https://reddit.com',
      normalisedURL: 'reddit.com',
      commands: {
        go: {
          template: '{@}/r/{$}',
          description: 'go to subreddit'
        },
        search: {
          template: '{@}/search?q={$}'
        }
      },
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#f07e23', '#f74300'],
        stops: [0, 100]
      },
      textColor: '#fff',
      pinned: true
    },
     {
      category: 'Programming',
      name: 'ChatGPT',
      icon: 'chatGPT',
      url: 'https://chat.openai.com/chat',
      normalisedURL: 'openai.com',
      triggers: [
        'c',
        'chat',
        'gpt',
        'cgpt',
        'chatgpt'
      ],
      key: 'KeyC',
      bgColor: {
        type: 'solid',
        color: '#70a597',
      },
      textColor: '#f7f7f7',
      pinned: true
    },
    
    {
      category: 'Music',
      name: 'spotify',
      icon: 'spotify',
      url: 'https://open.spotify.com',
      normalisedURL: 'spotify.com',
      triggers: [
        'music',
        'sp',
        'sfy',
        'spo',
        'spotify'
      ],
      commands: {
        search: {
          template: '{@}/search/{$}'
        },
        go: {
          template: '{@}/track/{$}',
          description: 'go to track'
        }
      },
      bgColor: {
        type: 'solid',
        color: '#1ccc5b'
      },
      textColor: '#000',
      pinned: true
    },
    {
      category: 'Social',
      name: 'Discord',
      icon: 'discord',
      key: 'KeyD',
      triggers: [
        'd',
        'dis',
        'discord'
      ],
      url: 'https://discord.com/app',
      normalisedURL: 'discord.com',
      bgColor: {
        type: 'solid',
        color: '#5460e6'
      },
      textColor: '#fff',
      pinned: true
    },
    {
      category: 'Social',
      name: 'Twitch',
      icon: 'twitch',
      url: 'https://twitch.tv',
      normalisedURL: 'twitch.tv',
      triggers: [
        'tw',
        'twitch',
      ],
      commands: {
        search: {
          template: '{@}/search?term={$}'
        },
        go: {
          template: '{@}/{$}'
        }
      },
      bgColor: {
        type: 'solid',
        color: '#8c44f7'
      },
      textColor: '#000',
      pinned: true
    },
    {
      category: 'Entertainment',
      name: 'Netflix',
      triggers: [
        'n',
        'nf',
        'nfx',
        'netflix',
      ],
      key: 'KeyN',
      icon: 'netflix',
      url: 'https://media.netflix.com',
      normalisedURL: 'netflix.com',
      commands: {
        search: {
          template: '{@}/en/search?&term={$}'
        }
      },
      bgColor: {
        type: 'solid',
        color: '#000'
      },
      textColor: '#da0813',
      pinned: true
    },
    
    {
      category: 'Communication',
      name: 'Gmail',
      icon: 'gmail',
      url: 'https://gmail.com',
      normalisedURL: 'gmail.com',
      triggers: [
        'em',
        'gm',
        'mail',
        'gmail'
      ],
      key: 'KeyE',
      commands: {
        search: {
          template: '{@}/#search/{$}'
        }
      },
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        angle: 45,
        colors: ['#df493b', '#e8e8e8'],
        stops: [50, 100]
      },
      textColor: '#e8e8e8',
      pinned: true
    },
    
    {
      category: 'Education',
      name: 'Wikipedia',
      icon: 'wikipedia',
      triggers: [
        'wi',
        'wiki',
        'wikipedia'
      ],
      url: 'https://www.wikipedia.org',
      normalisedURL: 'wikipedia.org',
      commands: {
        search: {
          template: '{@}/?search={$}'
        },
        go: {
          template: '{@}/wiki/{$}'
        }
      },
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#e1e1e3', '#bbb'],
        stops: [60, 100]
      },
      textColor: '#000',
      pinned: true
    },
   
    {
      category: 'Search',
      name: 'Bing',
      triggers: [
        'b',
        'bing',
      ],
      url: 'https://www.bing.com',
      normalisedURL: 'bing.com',
      commands: {
        search: {
          template: '{@}/search?q={$}'
        }
      },
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#3ab0f1', '#2351dd', '#40d1da']
      },
      textColor: '#e8e8e8'
    },
    
  ],
  engines: {
    google: {
      name: 'Google',
      bgColor: {
        type: 'solid',
        color: '#aaa'
      },
      textColor: '#fff',
      types: {
        // @ - origin query (what user typed); $ - final query (what is in the query field (selected))
        query: {
          template: 'https://www.google.com/search?q={$}'
        },
        calculator: {
          template: 'https://www.google.com/search?q={@}'
        },
        currency: {
          template: 'https://www.google.com/search?q={@}'
        }
      }
    },
    duckDuckGo: {
      name: 'DuckDuckGo',
      bgColor: {
        type: 'solid',
        color: '#e37151'
      },
      textColor: '#e8e8e8',
      types: {
        query: {
          template: 'https://duckduckgo.com/?q={$}'
        },
        calculator: {
          template: 'https://duckduckgo.com/?q={@}'
        },
        currency: {
          template: 'https://duckduckgo.com/?q={@}'
        }
      }
    },
    yandex: {
      name: 'Yandex',
      bgColor: {
        type: 'solid',
        color: '#fc3f1d'
      },
      textColor: '#000',
      types: {
        query: {
          template: 'https://ya.ru/search/?text={$}'
        },
        calculator: {
          template: 'https://ya.ru/search/?text={@}'
        },
        currency: {
          template: 'https://ya.ru/search/?text={@}'
        }
      }
    },
    qwant: {
      name: 'Qwant',
      bgColor: {
        type: 'solid',
        color: '#5992f7'
      },
      textColor: '#000',
      types: {
        query: {
          template: 'https://www.qwant.com/?q={$}'
        },
        calculator: {
          template: 'https://www.qwant.com/?q={@}'
        },
        currency: {
          template: 'https://www.qwant.com/?q={@}'
        }
      }
    },
    bing: {
      name: 'Bing',
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#3ab0f1', '#2351dd', '#40d1da']
      },
      textColor: '#e8e8e8',
      types: {
        query: {
          template: 'https://www.bing.com/search?q={$}'
        },
        calculator: {
          template: 'https://www.bing.com/search?q={@}'
        },
        currency: {
          template: 'https://www.bing.com/search?q={@}'
        }
      }
    },
    brave: {
      name: 'Brave',
      bgColor: {
        type: 'gradient',
        gradientType: 'linear',
        colors: ['#FB542B', '#343546']
      },
      textColor: '#e8e8e8',
      types: {
        query: {
          template: 'https://search.brave.com/search?q={$}'
        },
        calculator: {
          template: 'https://search.brave.com/search?q={@}'
        },
        currency: {
          template: 'https://search.brave.com/search?q={@}'
        }
      }
    }
  }
}
