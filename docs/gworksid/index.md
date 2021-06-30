---
id: GworksId
title: GWorks ID
---


### About GWorks-ID

GWorks ID is a PHP based auth system for Websites.
You can use it to login users to your website without store their information.


### Default URI's

__Authorization page:__

```php
https://id.g-works.eu/auth/?clientID=(App ID)&redirectURI=(URI) 
```
<small>This will response with a token after redirect</small>

<br>

__Get User Information__

```php
https://id.g-works.eu/v2/userData/?token=(token)

```
<small>This will response with:</small>

- Username
- Email-Address
- Profile Image
- Permission Level at GWorks ID

### Tutorial for

PHP SOON
