# qs_api_interaction
Various JavaScript files to perform mundane/repetitive tasks in QMC.

I am by no means a js developer. Also not a web developer. I know just enough about SSL and networking to get by with as little help from networking specialists as possible.

I've been doing QlikView and Qlik Sense development for a relatively long time, and I managed to create a lot of automation tools for myself and colleagues back in the day when we were still developing in QlikView, mostly using PowerShell and batch files.

Then came Qlik Sense.

A lot of the native functionality that was provided in QlikView Publisher was, and still is, not available in Qlik Sense. You either had to know your stuff in js or other languages, or buy third party software that did the work for you.

One of the features that we were missing was the ability to distribute a master application to various applications, for different plants, different clients, etc.

Qlik Sense has a very rich API, but I found that the documentation was more aimed at seasoned software developers. Even doing something basic was impossible for me. So I set off to build a tool to help me do rapid deployment of changes/enhancements of applications.

Using examples provided by Qlik, as well as some tips from friends who actually do js development, I was able to create some basic scripts to perform functions like stop tasks, start tasks, publish apps, replace apps, get app names, etc.

This is the first installment in a series of posts about on QS API for Noobs (in the js world).

I've uploaded the first, and most important script, that can distribute the master app. I've made comments to indicate references to other scripts that I've created (but are not public friendly) to perform the other, related operations such as to first stop tasks before replacing apps.
