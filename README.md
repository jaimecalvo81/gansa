# gansa

Backend:

dockerized wordpress.
Git ignores:
* everything in the root except the "wp-content" directory.
* ignores everything in the "wp-content" directory, except:
  "mu-plugins", "plugins", "themes" directory
* Everything in db.

Install following wp plugins:  
* Custom Post Type UI
* Advanced Custom Fields (ACF)
* ACF to REST API

fronted: 

React, uses wp api to fetch post.
