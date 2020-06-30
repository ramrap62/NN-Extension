# NN-Extension
Q.What is nudenet ?
A.Nudenet is an Google Chrome Extension, made by VIT-AP college students(names).It works on the NSFWdetector/Nudenet library of python which has been trained using number of sample images collected from adult sites.

Q.Why nudenet?
A.Our aim to provide a SFW working environment.While suffering the internet webpages which sometimes pops up some NSFW ads or has any NSFW contents(images), Nudenet Google Chrome Extension would block all those images which does fit the score for SFW.

Q.How it works?
A.Our Extension doesn't do any processing on the images,but it just crawls all the images on the webpage and sends it link to out webserver where we have our NudeNet model running which processes all images and sends back the results to the browser extension and based on the results it replaces all the NSFW images.Thus creating a SFW environment.

