---
# About the file naming:
# If you want the buyer to be able to switch language when on a service page
# The files name for the same vervice must be the same on all the transaltion folders

# Service settings
# Optional settings unless specified as mandatory

# Name of the service
# Mandatory
title: Photography
# If you want to temporarily disable one of your services, set this prop to true
# Default is disabled: false
# Check 2.nuxt2-nuxt3.md file for an example of a disabled service
disabled: false
# Description that with be set as html head tag.
# Useful for search engines
description: Book me for a photo shoot
# Profile picture of the service
# Save the file in the ./public foder and list the file name here
image: paraguay.jpg
# List of images and videos to show on the page
# Save the files in the ./public foder and list the files name here
# If you had a video, in the ./public folder you also have to save a screenshot of the video in png format
gallery:
  - py-video.mp4
  - py-92928414.jpg
  - py-976716792.jpg
  - py-998154074.jpg
  - py-1202834258.jpg
  - py-1264642993.jpg
  - py-1355346926.jpg
  - py-1128226270.jpg
  - py-500635863.jpg
# Duration of the booking in minutes
# It supports any number, from 1 minutes to 24 hours
# Mandatory
duration: 200
# currency of the btcpay invoice 
# Mandatory
currency: GBP
# amount of the btcpay invoice
# Mandatory
price: 200
# Optional extras to add the to the default service price
# Title must be unique
extras:
  - title: Framed Print
    description: Your chosen photo in a wooden frame up A2
    price: 150
  - title: USB Stick
    description: The full set of photos on a stick
    price: 75
---
My blurb