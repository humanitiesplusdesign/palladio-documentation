---
layout: post
title: Cleaning data example for Palladio
collection: tutorials
---

We start with the original data set from [sfgov.org]( https://data.sfgov.org/Culture-and-Recreation/SF-Civic-Art-Collection/zfw6-95su). This data set contains information about civic artworks in San Francisco: for example, their location, title, and artist.

![Screen Shot 2016-05-09 at 2.52.24 PM.png]({{ site.baseurl }}/assets/resources/52728F8EFE8CBB1C6E07286080AFEABB.png)

Notice that the data is pretty messy. 

The *geometry* column, for example, has useful information that isn't readable to Palladio in its current state. Palladio needs coordinates in latlon format in order to map them. 

![geometry.png]({{ site.baseurl }}/assets/resources/0E100985A3E5434981ED162CFA24ABD2.png)

Some of this data will be useless for our purposes – for example, the *created_at* column seems to have inconsistent data, some relating to when the artwork was created, and some indicating when the data itself was entered. 

The *_id* and *_rev* columns, on the other hand, are too complicated to say anything interesting in Palladio.

Once we download the data as a .csv file, we can work with it in Excel (or any other processor). You can download the original data set [here.]({{ site.baseurl }}/assets/resources/5B6A543407D7B0284955B426EE34B4D3.csv)

Stanford Humanities + Design has created another tool, [Breve,](http://breve.designhumanities.org/#/) to give you a bird's eye view of your data and see any gaps or errors. If we plug this data into Breve, it is clear that there is a lot of work to do. 

![Screen Shot 2016-05-24 at 3.27.56 PM.png]({{ site.baseurl }}/assets/resources/6DFA26DFFF762C183F639A031DDFBC15.png)

Now that we're working on the data, we can start by making the *id* column meaningful. Since all we need is a unique ID, we can just number the rows. Some of the colums that look completely useless, like *rev*, we can delete. Remember to save your data as you're cleaning it so that you don't loose information.

If we go through *accession_id*, it looks as though the first four digits are the year the artwork was purchased, and the decimal points perhaps refer to the number of purchases in that year. We can clean the data to allow us to work with those dates. 

![accession.png]({{ site.baseurl }}/assets/resources/11F770AF37C31DC318A27D0B6FF0149F.png)

Now the *id* column is easy to understand, and the accession dates are in a usable format. 

![Screen Shot 2016-05-23 at 10.55.51 PM.png]({{ site.baseurl }}/assets/resources/AAF75C92FDC323284A3E3AA8E5A1377A.png)

Now let's take a look at the *geometry* column. Palladio requires that coordinate data be in latlon form, so we can clear out the stuff around the numbers. 

![Screen Shot 2016-05-23 at 10.58.14 PM.png]({{ site.baseurl }}/assets/resources/E0E66E195F4022086264B433EA327C10.png)

When we put those coordinates into Palladio, however, it looks like they aren't California coordinates. In fact, they don't map at all. These coordinates turn out to be in longitude-latitude instead, so we'll need to switch them around to get them into a readable format. 

Now looking at the medium column, we can see that there is inconsistent capitalization and formatting. Digging into this data will require cleaning it first. Let's make this column the *descriptive medium* column so we don't lose any of the data. 

![Screen Shot 2016-05-24 at 2.44.19 PM.png]({{ site.baseurl }}/assets/resources/746A984838241FECBF4EB842EDE53DA7.png)

You can download the data in this state [here.]({{ site.baseurl }}/assets/resources/71B3E0953281ACDEDDFB592064D3375C.csv)

We don't have to limit ourselves to cleaning the data either; we can also expand on it. The Palladio TimeSpan feature would be excellent for looking at when artworks are purchased depending on how old the artist was, for example, and the Gallery feature could show us images of the artworks as well. 

![Screen Shot 2016-05-24 at 2.51.30 PM.png]({{ site.baseurl }}/assets/resources/89C38711F1578D714CAC6ED933B0D47F.png)

You can download a partial data set with a little more research [here.]({{ site.baseurl }}/assets/resources/EF31CBD8D3DA1DEFCC5AF753383EC81B.csv). 

Let's now turn our attention to the *location_description* column. 

![Screen Shot 2016-05-24 at 2.56.33 PM.png]({{ site.baseurl }}/assets/resources/7D8E521235EB571FB7EE327F2A7EDE74.png)

There's a lot of information here – the California districts that house the art, the description of the actual location, and whether or not the data is on public display. We could use Palladio's Multiple Values Delimiter to separate these pieces of information by the semicolon dividers, but it would be more interesting to be able to look at each of these data sets individually.

When we separate them out, however, they don't turn out to be very organized. 

![Screen Shot 2016-05-24 at 2.59.46 PM.png]({{ site.baseurl }}/assets/resources/5331D69C4DA0BE49F8532E3688499E12.png)

To download the data in this state, click [here.]({{ site.baseurl }}/assets/resources/A987020DFB269F4213545F7DF979ABD1.csv)

Going through the first column, we can make meaningful categories like Public Display, Airport, Museum, and City Department. This can help us understand where most of the civic arts in San Francisco go. 

In the second column, we can use the coordinates data to fill in blank spaces by mapping the coordinates and finding out what district they lie in. Palladio can help us do this with shapefiles.

![50shapefile unsorted.png]({{ site.baseurl }}/assets/resources/3A97F2E8CC35F7C422F0FAD7D9399FEC.png)

We can clean up the other columns so that they provide consistent descriptions of the locations that we can then use in Palladio's Facet Filter. 

Now the location description is much more meaningful and we can use Palladio's different filters to help us dig into the data. 

![Screen Shot 2016-05-24 at 3.06.11 PM.png]({{ site.baseurl }}/assets/resources/BAE07DBDAB7E4357C73FE439D5195F47.png)

We can do something similar with the *medium* data. Palladio's bivariate graph and TimeLine Filter could let us examine the growth of a medium over time, but the current data has too many unneccesarily unique values. 

![Screen Shot 2016-05-24 at 3.15.18 PM.png]({{ site.baseurl }}/assets/resources/CFEBF522427B775A32B52F983EA29815.png)

Keeping the *descriptive medium* column so we don't lose data, we can simplify this information to key terms separated by a consistent delimiter. For example, "bronze sculpture on black granite veneer base" becomes "bronze, granite". 

Now when we look at the data, it is much easier to see the types of media being used most frequently. 

![Screen Shot 2016-05-24 at 3.14.33 PM.png]({{ site.baseurl }}/assets/resources/3DC0413C88BD5E1DE5FF4D36DA3409DC.png)

We can do similar things with the *artist* column, making sure multiple artist names are separated by a distinct delimiter. 

Finally, while running the clean data through Palladio and beginning to examine it, you could also run into errors. For example, mapping our cleaned coordinates turned up with one in Mexico! 

![mexico.png]({{ site.baseurl }}/assets/resources/9E6E5B79E74B7A1C1B4679E4AB3A8A12.png)

This particular piece, it turns out, was a gift from Mexico, but currently resides in San Francisco. We can find it in the dataset and get the actual coordinates by looking up the location description.

Now that our dataset is clean, we can begin really examining it in Palladio. Not everything is perfect: for example, the district information does not always match up with the district boundaries. 

But because the data is now formatted consistently, we can use Palladio to discover these kinds of issues as well. 

![Screen Shot 2016-05-24 at 3.23.14 PM.png]({{ site.baseurl }}/assets/resources/0A9BAD472E038008A4E1A5D671BB29D1.png)

We can now take full advantage of Palladio's filters and capabilities to explore our data. 

You can download the cleaned data set [here.]({{ site.baseurl }}/assets/resources/18F066FEDA8F5BD55720DDA37FD4C9CB.csv)







