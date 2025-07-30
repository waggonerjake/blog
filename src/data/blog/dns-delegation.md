---
author: Jake Waggoner
pubDatetime: 2025-07-29T19:43:12.000-04:00
modDatetime:
title: DNS Delegation Explained
featured: false
draft: false
tags:
  - tech
  - tips
description: A explanation of DNS delegation
---

In my current line of work at Eli Lilly, I have gotten extremely familiar with the concept of DNS and feel like I should go over a topic that may seem confusing to some: DNS Delegation

<figure>
  <img src="https://tse2.mm.bing.net/th/id/OIP.KwGO5JNcFL-LFF4-IKQ4wQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Route 53" />
  <figcaption class="text-center">Amazon Route 53</figcaption>
</figure>

## Table of contents

## DNS Overview

DNS stands for Domain Name System and is the system the internet uses to navigate to a website or URL. Essentially, when you enter a domain into your browser, a series of calls go back and forth between multiple servers across the globe to find where that domain lives and retrieves the IP address so it can be routed to. Let's use this domain, www.jakewaggoner.com, as an example for how to break down a domain. This domain is broken up into 4 pieces, known as labels:

- www: This is known as a subdomain or in this case the third level domain
- jakewaggoner: This is the second level domain
- com: This is the top level domain
- `.`: This is at the very end of the domain, after .com. This is known as the root and is empty but represented as a `.`

The way this site is found in DNS is by reading the domain from right to left, here are the steps:

1. The root name server is called to find where the top level domain, .com, is stored. Once we get the record for that, we jump to that server.
2. Now we are at the .com name server is now called to find where the domain "jakewaggoner" lives. This will allow us to find where the www subdomain is.
3. Arriving at the jakewaggoner name server, we can now find the record for the www subdomain, which can either take us to another server, or in this case, return an IP address.

> Fun Fact: Amazon Route 53 is called that because DNS runs on port 53

## DNS Delegation

DNS Delegation is a nice way to manage subdomains for your domain. The point of DNS delegation is to give a different hosted zone control over a particular subdomain (and any subdomain off of that subdomain). For subdomains like `www`, we do not need to perform DNS delegation as this should typically be a just a standard A/AAAA/CNAME record. However, for more complex subdomains like `login.jakewaggoner.com` then you may want to delegate that subdomain to its own hosted zone that has its own records. To do DNS Delegation, complete the following steps:

1. Create a new DNS hosted zone for your subdomain
2. Copy the NS records that were created for the hosted zone. These are Name Server records and tell DNS what server to jump to find the records pertaining to that domain.
3. Go to the parent domain's hosted zone and create a new NS record with the values that were copied from the subdomain hosted zone

That's it! Calls to the subdomain will now be routed away from the parent hosted zone into the subdomain's own hosted zone.

Without DNS delegation, you would have to put all your subdomains into the same hosted zone as your parent domain. This is fine if you only have a few (or if you only have a `www` subdomain), but if the number of subdomains grows to be a substantial size then the hosted zone file will become too large to effectively manage and find records.

DNS Delegation has some significant advantages and some slight disadvantages, let's take a look at some:

| **Pros**                                                                                     | **Cons**                                                               |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Great for giving control of a subdomain to a 3rd party                                       | If charged per hosted zone, then this could incur additional costs     |
| Easier to manage many subdomains as they are separated instead of grouped as 1 big zone file | Takes slightly longer to do than putting everything in one hosted zone |
| Perfect use case for cross account/provider routing                                          |                                                                        |

Since DNS is the same regardless of where it is implemented, a domain can be delegated to any platform/server regardless of the platform/server its parent domain is on.

## Use Cases

Here are some use cases where I have used DNS Delegation in practice:

1. Delegate lower environment domains (e.g. dev, qa, staging) to our lower environment accounts. This allows us to control our environment domain from within our environment rather than going to production where the parent domain lives.
2. Delegate domains to a 3rd party/other team. Delegated a subdomain to another team allows them to take the burden of managing the DNS off of my team and I, therefore if they need to make changes they have the autonomy to do it themselves rather than ask for help.
3. Delegate certain subdomains to a separate DNS provider. For instance, if you have your main domain on AWS and want to setup a subdomain on CloudFlare, you could simply delegate the domain to CloudFlare rather than migrate everything over to CloudFlare.

> Tip: When delegating to lower environments, I find it easiest to use a CI/CD pipeline to log into the lower environment accounts, copy the NS records for each domain, and then put them into the production hosted zone at the very end all at once.
