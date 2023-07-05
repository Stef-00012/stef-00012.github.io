const spoiler = document.getElementById('spoiler');
const spoilerDesktop = document.getElementById('spoiler-desktop');

const codeBlock = document.getElementById('code-block');
const codeBlockDesktop = document.getElementById('code-block-desktop');

function backgroundImageSet() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    if ((month == 12 && day >= 8 && day <= 31) || (month == 1 && day >= 2 && day <= 3)) {
        document.body.className = "christmas"; //christmas
    }
    
    if (month == 4 && day >= 9 && day <= 12) {
        document.body.className = "easter"; //easter
    }
    
    if (month == 10 && day >= 25 && day <= 31) {
        document.body.className = "halloween"; //halloween
    }
    
    if (month == 1 && day >= 4 && day <= 8) {
        document.body.className = "epiphany"; //epiphany
    }
    
    if (month == 1 == day == 1) {
        document.body.className = "newyear" //new year
    }
}

backgroundImageSet();

spoiler.onclick = function() {
    spoiler.style.backgroundColor = "rgba(54, 47, 46, 0.65)";
    spoiler.style.color = "rgba(255, 255, 255, 0.85)";
}

spoilerDesktop.onclick = function() {
    spoilerDesktop.style.backgroundColor = "rgba(54, 47, 46, 0.65)";
    spoilerDesktop.style.color = "rgba(255, 255, 255, 0.85)";
}

document.querySelectorAll('.collapsible-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const collapsibleContent = btn.nextElementSibling
        
        btn.classList.toggle('active')

        if (btn.classList.contains('active')) {
          if (collapsibleContent.children[0].classList.contains('embed-github')) {
            if (collapsibleContent.children[0].classList.contains('desktop')) {
                for (const embed of collapsibleContent.children) {
                    embed.style.display = 'inline-block'
                }
            } else {
                for (const embed of collapsibleContent.children) {
                    embed.style.display = 'block'
                }
            }
          }
          
            if (collapsibleContent.children[0] && collapsibleContent.children[0].classList.contains('code-block')) {
                codeBlock.style.display = 'block'
                spoiler.style.display = 'block'
                codeBlockDesktop.style.display = 'block'
                spoilerDesktop.style.display = 'block'
            }

            if (collapsibleContent.children[1] && collapsibleContent.children[1].classList.contains('collapsible-content-image')) {
                if (collapsibleContent.children[1].classList.contains('desktop')) {
                    for (const image of collapsibleContent.children) {
                        image.style.display = 'inline-block'
                    }
                } else {
                    for (const image of collapsibleContent.children) {
                        image.style.display = 'block'
                    }
                }
            }
            
            if (collapsibleContent.children[0] && collapsibleContent.children[0].children[0] && collapsibleContent.children[0].children[0].classList.contains('small-social-logo')) {
              for (const social of collapsibleContent.children[0].children) {
                social.style.display = 'inline'
              }
            }

            btn.style.height = '40px'
            collapsibleContent.style.border = '4px solid #a2a3a5'
            collapsibleContent.style.borderTop = '0px'
            
            collapsibleContent.style.height = collapsibleContent.scrollHeight + 'px'
            setTimeout(() => {
                collapsibleContent.style.color = 'white'
            }, 100)
            
            
        } else {
            collapsibleContent.style.height = '25px'
            
            setTimeout(() => {
                if (collapsibleContent.children[0] && collapsibleContent.children[0].classList.contains('code-block')) {
                    codeBlock.style.display = 'none'
                    spoiler.style.display = 'none'
                    codeBlockDesktop.style.display = 'none'
                    spoilerDesktop.style.display = 'none'
                }

              if (collapsibleContent.children[0].classList.contains('embed-github')) {
                for (const embed of collapsibleContent.children) {
                  embed.style.display = 'none'
                }
              }
              
                if (collapsibleContent.children[0] && collapsibleContent.children[0].children[0] && collapsibleContent.children[0].children[0].classList.contains('small-social-logo')) {
                  for (const social of collapsibleContent.children[0].children) {
                    social.style.display = 'none'
                  }
                }
              
                if (collapsibleContent.children[1] && collapsibleContent.children[1].classList.contains('collapsible-content-image')) {
                    for (const image of collapsibleContent.children) {
                        image.style.display = 'none'
                    }
                }

                btn.style.height = '20px'
                collapsibleContent.style.color = 'transparent'
            }, 200)
        }
    })
})


jQuery(() => {
    new jBox('Mouse', {
        attach: '#tooltip-discord',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Discord</b><br /><i>stef_dp</i> (Ex: <i>Stef#6705</i>)'
    });

    new jBox('Mouse', {
        attach: '#tooltip-discord-desktop',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Discord</b><br /><i>stef_dp</i> (Ex: <i>Stef#6705</i>)'
    });
    

    new jBox('Mouse', {
        attach: '#tooltip-twitch',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Twitch</b><br /><i>Stef_DP</i>'
    });

    new jBox('Mouse', {
        attach: '#tooltip-twitch-desktop',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Twitch</b><br /><i>Stef_DP</i>'
    });

    
    new jBox('Mouse', {
        attach: '#tooltip-instagram',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Instagram</b><br /><i>stefanodelprete_</i>'
    });

    new jBox('Mouse', {
        attach: '#tooltip-instagram-desktop',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Instagram</b><br /><i>stefanodelprete_</i>'
    });

    
    new jBox('Mouse', {
        attach: '#tooltip-github',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Github</b><br /><i>Stef-00012</i>'
    });

    new jBox('Mouse', {
        attach: '#tooltip-github-desktop',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Github</b><br /><i>Stef-00012</i>'
    });
    

    new jBox('Mouse', {
        attach: '#tooltip-telegram',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Telegram</b><br /><i>Stef_DP</i>'
    });

    new jBox('Mouse', {
      attach: '#tooltip-telegram-desktop',
      position: {
          x: 'right',
          y: 'top'
      },
      content: '<b>Telegram</b><br /><i>Stef_DP</i>'
    });
    

    new jBox('Mouse', {
        attach: '#tooltip-youtube',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Youtube</b><br /><i>Stefano Del Prete</i>'
    });

    new jBox('Mouse', {
      attach: '#tooltip-youtube-desktop',
      position: {
          x: 'right',
          y: 'top'
      },
      content: '<b>Youtube</b><br /><i>Stefano Del Prete</i>'
  });

    
    new jBox('Mouse', {
        attach: '#tooltip-twitter',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Twitter</b><br /><i>Stef_Del_Prete</i>'
    });

    new jBox('Mouse', {
        attach: '#tooltip-twitter-desktop',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Twitter</b><br /><i>Stef_Del_Prete</i>'
    });

    
    new jBox('Mouse', {
        attach: '#tooltip-spotify',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Spotify</b><br /><i>Stef</i>'
    });

    new jBox('Mouse', {
        attach: '#tooltip-spotify-desktop',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Spotify</b><br /><i>Stef</i>'
    });

    
    new jBox('Mouse', {
        attach: '#tooltip-tiktok',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Tiktok</b><br /><i>stefano0122</i>'
    });

    new jBox('Mouse', {
        attach: '#tooltip-tiktok-desktop',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Tiktok</b><br /><i>stefano0122</i>'
    });

    
    new jBox('Mouse', {
        attach: '#tooltip-reddit',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Reddit</b><br /><i>XxDemonDark08xX</i>'
    });

    new jBox('Mouse', {
      attach: '#tooltip-reddit-desktop',
      position: {
          x: 'right',
          y: 'top'
      },
      content: '<b>Reddit</b><br /><i>XxDemonDark08xX</i>'
    });
    
    
    new jBox('Mouse', {
        attach: '#tooltip-revolt',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Revolt</b><br /><i>Stef</i>'
    });

    new jBox('Mouse', {
      attach: '#tooltip-revolt-desktop',
      position: {
          x: 'right',
          y: 'top'
      },
      content: '<b>Revolt</b><br /><i>Stef</i>'
  });

    
    new jBox('Mouse', {
        attach: '#tooltip-mastodon',
        position: {
            x: 'right',
            y: 'top'
        },
        content: '<b>Mastodon</b><br /><i>Stef_DP</i>'
    });

    new jBox('Mouse', {
      attach: '#tooltip-mastodon-desktop',
      position: {
          x: 'right',
          y: 'top'
      },
      content: '<b>Mastodon</b><br /><i>Stef_DP</i>'
  });

    new jBox('Mouse', {
        attach: '#tooltip-steam',
        position: {
            x: 'right',
            'y': 'top'
        },
        content: '<b>Steam</b><br /><i>Stefano_Del_Prete</i>'
    })

    new jBox('Mouse', {
        attach: '#tooltip-steam-desktop',
        position: {
            x: 'right',
            'y': 'top'
        },
        content: '<b>Steam</b><br /><i>Stefano_Del_Prete</i>'
    })
})