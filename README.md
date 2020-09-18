# TechBlog

Upper idea right now:

- Authentication
  - Public content
    - Caching
    - DDOS protection using exponential backoff calls on weird IP's
    - Public posts
  - Authenticated content
    - User role
    - User content
    - Stats and score
    - Benefits for score
    - Group/Paid posts or tutorial.
  - Notification
  - Localization
  - Email service
  - Commenting service
  - Search
  - Trending/Latest topics
  - Docker to deploy this code
  
 
Designs: https://drive.google.com/file/d/1KDrZKDydq-RQg1SaS5CSnhbkXuZ9DGt0/view?usp=sharing
![image](https://user-images.githubusercontent.com/20709166/92312252-9f23f980-efdc-11ea-8f14-25e09a284f2a.png)

This covers:
- Homepage layout
- List of blogs
- Single blog look
- Comments

-----------------------------------------------------------------------------------------------------------------

#blog-ui
- Runs on port 3000