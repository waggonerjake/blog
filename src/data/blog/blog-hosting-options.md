---
author: Jake Waggoner
pubDatetime: 2025-07-25T21:01:09.000-04:00
modDatetime:
title: Vercel vs AWS Blog Hosting
featured: true
draft: false
tags:
  - tech
description: Choosing between Vercel and AWS for hosting this blog
---

Let's dive into why I have chosen to host this blog on Vercel instead of AWS

<figure>
  <img src="/assets/VercelVsAWS.png" alt="Vercel vs AWS" />
  <figcaption class="text-center">Battle of Hosting Providers</figcaption>
</figure>

## Table of contents

## Thought Process

I am extremely biased towards AWS as it is my professional area of expertise so naturally when I created this blog the first thing I thought of was hosting it there. Before I even knew what framework I was going to use to build this thing I was already thinking of what CI/CD I would use to deploy to AWS and what resources I would need and what it would cost me. I already had the domain purchased and setup in Route53, so moving it to CloudFront + S3 was the next natural step to me. Plus, I have done this setup so many times that I could get it spun up in under 10min. However, once I decided to use Astro to develop this site it was recommended to use Vercel due to it being able to deploy out of the box without any configuration. The best part? It's **completely free** for hobby users. Forever.

In the [Astro blog tutorial](https://docs.astro.build/en/tutorial/0-introduction/), its recommended to use Netlify to host your app. However, Netlify does not have some features that Vercel has that are discussed later so that is why I did not go with them. Overall, my decision came down to Vercel vs AWS.

## TLDR;

| Feature                     | Vercel                                   | AWS                                                                     |
| --------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| **_WAF_**                   | Included for FREE ✅                     | No Free Option ❌                                                       |
| **_Free Requests_**         | 1 Million Requests Per Month             | 10 Million Requests Per Month 💪                                        |
| **_Automated Deployments_** | Yes and Supports Astro out of the box ✅ | Requires a custom CI/CD Pipeline                                        |
| **_Familiarity_**           | Never used Vercel before this            | My Comfort Place ❤                                                     |
| **_Price_**                 | Free. Forever.                           | Mostly free but could end up paying for certain features, like a WAF 💲 |

## Vercel

This blog is hosted on Vercel and before this I had never used Vercel and only barely knew what it (they?) was. And I only knew about it because they are the creators of Next.js. Vercel's hobby plan has some limitations that may not suit everyone's needs but for a small blog like this it seems to be the perfect fit. Below are the main reasons I chose Vercel for this site.

### GitHub integration and Automated Deployments

While other platforms like Netlify have this out of the box, AWS does not (at least not with CloudFront + S3), so this was a huge benefit for me. Don't get me wrong, I love writing CI/CD pipelines as much as the next guy but if I don't have to then I wont. When I first found Vercel, I didn't even have to go through the hassle of making an account either, I was just able to login using my existing GitHub account. This then let me hook up my Astro repo directly to Vercel which then has an Astro-based deployment configuration out of the box. How cool is that?? This was a huge lift off my shoulders compared to AWS where I would have to manage all the infrastructure myself or use AWS Amplify, which doesn't support Astro out of the box.

### Free. Forever.

Vercel's hobby tier is free forever. Of course it has its limits but I will never have to pay a dime while hosting this site on Vercel (excluding the custom domain but that's not on Vercel 😁). AWS has a free tier, but I have had my AWS account for over 3 years and thus no longer have any free tier credits or time left. However, this doesn't really matter because I planned on using CloudFront + S3 and both of those services have a always-free tier but that doesn't mean there is an instance where I do not end up paying _something_ for hosting this site on AWS. You can check out Vercel's pricing and feature list [here](https://vercel.com/pricing).

### WAF

This is one of the biggest selling points for me and frankly I cannot believe this is a free option. Netlify does not offer a WAF for free, nor does AWS. The WAF is limited on Vercel, but it has features such as DDoS mitigation, 3 custom firewall rules, rate limiting, and bot protection, and even request challenging all completely for free!! This is massive and a huge benefit of using Vercel.

## AWS

I still may end up moving this site to AWS in the future if I see the need for it. As of now I do not plan on it, but things may change. Below are my main reasons why I may choose AWS in the future to host this site.

### Familiarity

As I stated previously, AWS is my bread and butter. I have used AWS since 2019 and have continued to use it since. I am a big fan of AWS as a whole and immediately gravitate towards using it for anything cloud related. Of course, this doesn't mean I _have_ to use it or else I wouldn't be writing this post. This isn't a strong enough reason to move the site, especially given the reasons above, but it is always nice to be in a comfortable environment.

### Scale

Vercel has some serious limitation in terms of traffic allowance. For instance, Vercel only allows up to 1M requests per month. I am not sure what happens if you hit that limit, but I assume it will just stop serving the site. However, CloudFront allows you to get up to 10M requests for free per month. This means if your site gets a good chunk of traffic, then Vercel's hobby plan is not going to cut it. This is not a concern as of now, but who knows in the future how things go.

### Build Control

When deploying to AWS, I get to control how the build works and use whatever CI/CD platform I feel like. With Vercel, I am stuck with theirs and cannot configure anything or have different environments. For this site, I do not currently need any advanced build capabilities nor do I have separate environments, so having my own CI/CD pipeline and build control isn't necessary. But things may change in the future and if I end up requiring a custom build, then I may have to end up switching.
