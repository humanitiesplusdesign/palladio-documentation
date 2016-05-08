// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "Palladio FAQs",
  author: null,
  layout: "narrative",
  content: "\n  What is a Palladio project?\n  Which data formats work with Palladio?\n  What does it mean if I see a red icon and ‘Please review’ in one of my dimensions?\n  What is a Multiple Values Delimiter?\n  How should Dates be entered?\n  How should Coordinates be entered?\n  What do the labels and numbers listed directly below my dimension represent?\n  How do I get the most use out of the TimeLine feature?\n  How do I get the most use out of the TimeSpan feature?\n  What are some applications of the Gallery View?\n  How do I get the most out of Map view?\n  What are Size Points?\n  I would like to export a Map visualization but can only export it as an .svg with dots and lines. What should I do?\n  How does the List view work?\n\n\nWhat is a Palladio project?\n\nA Palladio project begins first with the tabular data you have on your computer. Once you’ve uploaded this data into the Palladio interface, you can then refine it, visualize, and save it back to your computer as a Palladio project. The Palladio project will be saved with the extension .json and includes the schema and structure required to visualize your data in Palladio the next time you visit. (In other words, you cannot simply upload any .json file created elsewhere and expect it to work within the Palladio platform.) Now, as you continue to use Palladio, you can shorten the upload and refine stages by uploading your existing palladio.json file (the Palladio project). But please remember that if you make further changes to your data in the refine stage, you will have to save this new work as a new .json file in order to have a version of the project that reflects your more recent changes.\n\nWhich data formats work with Palladio?\n\nAny collection of information that can be represented in a table format (in other words, any data you might enter into a spreadsheet program) will work with Palladio. Make sure that all data is represented by delimited-separated values. Palladio supports the following delimiters: commas, semicolons and tabs.\n\nPalladio works best with data that is uniform, consistent, and simple. Avoid notes and comments within your data, or any unnecessary diacritics.\n\nTip for those using .csv files: This ‘CSV Fingerprints’ tool can be very helpful in spotting any mistakes in your .csv files. Breve, another tool from the Stanford Humanities + Design Lab, is another tool for visualizing the scale, types, and gaps in your data.\n\nYou can also build your own tables and bring them into Palladio in three ways:\n\n\n  \n    By typing text into any word processing program (ie. textedit or MS Word) and then copying the contents into Palladio interface.\n  \n  \n    By dragging any file format into the Palladio interface, for instance by dragging a .txt or .csv file from your work station and dropping into Palladio.\n  \n  \n    By typing directly into the Palladio interface.\n  \n\n\nIf you plan to build your own table in Palladio:\n\nThe first row in your data will be parsed as a header. This means that the first row in your data will indicate the name of the dimensions in the column below.\n\nSo, a table column of people’s names would have ‘Names’ as its first row and then dimensions, such as ‘John Doe’ and ‘Jane Smith’ in the rows below. Palladio cannot properly access and reference the different dimensions in your data unless you follow this format.\n\nEach column header must be unique from the other. Within a header name you may use letters, spaces, and numbers. Do not use any special alphanumeric characters, such as underscores ‘_’ or dashes ‘-‘, as these will confuse Palladio.\n\nExamples of data:\n\nCorrect:\n\nFirst name, Last name, Age\n\nJohn, Doe, 28\n\nJane, Smith, 35\n\n\n\nIncorrect (missing header):\n\nJohn, Doe, 28\n\nJane, Smith, 35\n\n\n\nIncorrect (two headers with the same name):\n\nName, Name, Age\n\nJohn, Doe, 28\n\nJane, Smith, 35\n\n\n\nIncorrect (special characters in the header):\n\nFirst_Name, Last-Name, Age\n\nJohn, Doe, 28\n\nJane, Smith, 35\n\n\n\nOther Data Issues:\n\nNote that empty rows in your data will be ignored by Palladio.\n\nPalladio does not work with unstructured data, such as one long string of text, but only with data that has been placed into some kind of table. The richest uses of Palladio comes from having several different related tables of information, however many users will start with just one single table.\n\nWhat does it mean if I see a red icon and ‘Please review’ in one of my dimensions?\n\nThis is Palladio’s way of telling you that there could be errors in your data. Palladio notices if there are non-standard alpha-numerical characters in your data. These special characters may either lead to errors, or (in the case of commas or semicolons used to separate values in a given dimension) these special characters may be of help for you to use advanced tools such as the Multiple-Values Delimiter.\nPalladio could also be telling you that not all of your data seems to be of the same type.\n\nWhat is a Multiple Values Delimiter?\n\nYour tabular data is made up of various dimensions (ie. individual cells in a spreadsheet). In some cases you may want to assign more than one value for a certain dimension. For instance, you may have a column describing someone’s ‘Position.’ The column could be filled Princes, Popes, and Poets. But what if your Prince was also a Pope? In this case you could enter ‘Prince, Pope’ in one single cell of your table. Now, after you’ve uploaded the data into Palladio, you can parse that cell into two unique values. Here’s how: In the Multiple Values Delimiter input box, enter the symbol you’ve used to separate your values, in this case, a comma that separated Pope and Prince. Now Palladio understands that this entry as two separate values.\n\nHow should Dates be entered?\n\nDates should be entered in the following format Year-Month-Day (2014-01-01). Years must always be rendered as four digit integers. Thus years between 0 CE and 1000 CE should still be rendered as 0001 or 0999. Negative dates should follow the same format, but preceded by a minus sign (ie. -200-01-01). If using Excel, be sure to specify that the column reads as “Text” rather than dates, so that Excel doesn’t change the dates into its own (non-Palladio friendly) format.\n\nHow should Coordinates be entered?\n\nCoordinates information must be rendered as latitude and longitude, separated by a comma. For example: 41.95, 12.5.\nThis Geocoding tool may be of help for those who have a list of place names but no associated coordinates: \nhttp://sandbox.idre.ucla.edu/geocoder/\n\nSee the Scenario: Creating Data for a Simple Map for more information about creating and entering coordinates information. Download PDF\n\nWhat do the labels (text, date, URL etc.) and numbers listed directly below my dimension represent?\n\nIn the refine (non-visualization) view your data appears as table, with each column header represented as a unique dimension.\n\nFor instance, Gender as the Dimension Name, with the label Text and number 2 listed below.\n\nIn this case Gender is the header from one column of your data, Text is the data type recognized by Palladio (most data will be recognized as Text), and the number 2 represents the number of unique values in your data - in this case the data contains 2 values: Male and Female.\n\nPalladio will guess the type of data entered based on its attributes. Data will be recognized as either: Text, Number, Year or Date, Coordinates, URL.\n\nIf Palladio ‘guesses’ your data incorrectly you can click on the dimension and in the dropdown menu labeled Data Type, change the type of data specified. The more accurately Palladio defines your data, the better the platform will work.\n\nHow do I get the most use out of the TimeLine feature?\n\nAs you change the temporal period in your TimeLine filter view, the map will update to show data only from that period. You can zoom in to get as granular a view as you would like. One of the most exciting features of Palladio’s timeline is that it allows users to select more than one point on the timeline to show more than one period (ie. 1900-150) and 1970-200) view these simultaneously within a given visualization.\n\nThe Group By option allows you to see the data in stacked bars, showing you how a certain group of data appears across the timeline as you hover.\n\nHow do I get the most use out of the TimeSpan feature?\n\nUse the TimeSpan feature to visualize any data for which you have both a starting date and an end date, such as a lifetime, or a season. Palladio will recognize any dimensions entered in the correct format (ie. 2014-06-27) and will allow you to select any such dimension as either the start date or end date within the timeline view. Choose from a parallel or bar view.\n\nWhat are some applications of the Gallery View?\n\nIn the Gallery View you can display different kinds of data that cannot be visualized as maps or graphs.\n\nFor instance, if in your data set you had a column in which you linked a list of people to URLs containing images of each person, you could then display these images in grid view.\n\nIn this case, you would go to Grid View and click the ‘Image URL’ option. Palladio would then locate the dimension in which you’ve listed image URLs in your data.\n\nHow do I get the most out of the Map view?\n\nThe default map view is a blank map. Note the settings panel to the right. You can hide the panel by clicking on the gear symbol. Zoom in and out using the + and - signs in the top left, and click and drag or use the arrow keys to move the map around.\n\nThe first step is to specify the type of map you’d like to see. To do so, choose from the menus within the settings panel. You can choose from two types of map views: ‘Points’ or ‘Point to Point’. (Note that access to these functions will depend on the kinds of information you’ve uploaded. You wouldn’t, for example, be able to use the ‘Point to Point’ function unless Palladio recognizes a dataset with more than one type of coordinates column, ie. ‘Source City’ and ‘Destination City.’)\n\n‘Points’ map view\n\nIn the ‘Points’ map view, Palladio can map out a collection of unique locations, based on any coordinates data (longitude, lattitude) you’ve entered. For instance, if you uploaded a table listing all of the Popes in the last five hundred years, their individual cities of birth, and coordinates data for each of these cities, you might want to see a worldwide view of where Popes have been born in the last five hundred years.\n\nIn Points view you can only select one dimension. If you toggle Size points, the sizes of each dot will relates to their frequency within your data. You can specify how you would like to count your data by using the Count By function. Note you can only count by unique tables uploaded in your data. Hovering over specific dots will display corresponding data. You can select which type of data to display on hovering, by using the Tooltip label.\n\nBelow the ‘Type of Map’ menu is a second menu, ‘Places.’ This menu will be populated with any data for which there are coordinates, and the menu choices will be named for the headers of columns containing coordinates data. For instance, in our Popes dataset set, if the coordinates data in your original table is labeled ‘Birth City Coordinates,’ then you will be prompted to choose ‘Birth City Coordinates’ within the ‘Places’ menu. To see all of your Popes birthplace data on the map, you would select ‘Birth Place Coordinates’ in the ‘Places’ menu. Now the map will be populated with dots representing each individual value in your coordinates data.\n\nSee the Scenario: Creating Data for a Simple Map for more information about creating and entering coordinates information.\n\nDownload PDF\n\n‘Point-to-Point’ map view\n\nThe point to point view give us a node-link map. Here you will select two different dimensions (ie. source city and destination city) and see the links between various points.\n\nThe arc of the link between two points represents the direction of the flow. Think of direction in a clockwise function.\n\nNow you can explore this Map data in various ways by using the Timeline and Facet Filter functions. You can also use the search bar to filter the data being visualized to accord with whatever parameters you wish, so long as your coordinates data corresponds in some way to whatever you’ve typed into the search bar. You can also isolate specific points on your map by clicking on them.\n\nSee the Scenario: Creating Data for a Point to Point Map for more information about creating and entering coordinates information.\n\nDownload PDF\n\nWhat are Size Points?\n\nToggling the Size Points function in the map view will change the sizes of your various dots on the map, depending on how frequently they appear in your dataset. So, for instance, if you had a table listing 30 people born in Rome and 1 in Florence, and you have produced a map visualization that counts by people, the dot representing Rome in your map view will be significantly larger than the dot representing Florence. You can adjust the scale of the Size Points (in other words, the  size of the dots as they appear in relation to the map) by toggling the Adjust Scale button.\n\nI would like to export a Map visualization but can only export it as an .svg with dots and lines. What should I do?\n\nAs Palladio Map Visualizations involve placing static coordinates data onto a separate map grid layer the full visualization cannot currently be exported as an .svg, rather you will see only the dots and lines against a blank background. If this solution is unsatisfactory, we recommended using ‘screen grabs’ as the best method, currently, for exporting map visualizations.\n\nHow does the List view work?\n\nUse this view to filter and arrange data to create customized lists. First select the Row Dimension by which your list will be arranged.  Then select the specific Dimensions you would like to see.  Palladio will then return a list including those Dimensions, arranged according to the Row Dimension you’ve selected.  Data can then be filtered using the usual suite of filters provided in other visualizations. Lists can be exported as csv files.\n\nUnderstanding how lists are created:\nLet’s say you have a list of unique names, and the places where each person was born. If you created a list with the dimensions “Names” and “Places of Birth,” and arranged this list by the Row Dimension “Names,” then you would see a list where each row contains a single name and the place of birth of the person listed. But if you created that same list, but now arranged it by the Row Dimension “Places of Birth” you would see a list where each row contains a single Place of Birth and every person born in that place. So, if more than one person in your data was born in Paris, you would not have a simple 1 to 1 ratio across the dimensions; instead your Paris row might contain several names, while your New York row might contain only one name. The point is not to be misled into thinking that the List view will automatically return something akin to a simple table, where every row lines up across the various columns.\n\nPlease email us at palladio@designhumanities.org to share your experience.\n\n",
  id: 0
});
index.addDoc({
  title: "Palladio Release: Load and Save",
  author: "Mark Braude",
  layout: "narrative",
  content: "\n\nRelease notes 2014-04-16\n\n\n\nNew Features\n\nData Portability\n\nUpload your data. Refine it. Save it. Share it.\nUse the latest version of Palladio to create an instance of your data that you can save to your desktop for simple future upload. You can also share this data with other users.\n\nExport Graph Views\n\nExport Graph Views as .svg files. Scalable Vector Graphics (.svg) files can be manipulated with drawing software, such as Illustrator, to be included in publications and presentations as high resolution images.\n\nMajor Interface Redesign\n\nNew and simplified menu bar.\n\nA highlighting function in the Timeline that allows for tracking particular dimensions of your data across time.\n\nClearer labeling in the Graph view.\n\nTool Tip function that allows you to select what dimension data will be displayed when you hover over different points in your visualizations.\n\nDimension Point Scaling. \nAs you drag across the Timeline, your dimension points will resize (growing larger or smaller) to reflect their changing frequency in your data set across time.\n\n‘Count By’ feature. \nIn the Map and Graph views you can choose to quantify your data according to the different dimensions in your table, allowing for different data visualizations. The Count By feature can work at several levels concurrently; for instance, you could count by ‘Letters’ within your Map view and then filter the information further by counting by ‘People’ in the Timeline filter.\n\nExpanded ‘Group by’ options. \nIn the Timeline filter, you can now Group your data by any dimension of your choice.\n\nSearch Function. \nType any term in the search bar to locate it within the data you are currently viewing.\n\nSelect/Deselect All in Facet Filter. \nResearchers can select or deselect all information in a single click, when using the Facet Filter tool. This allows for reverse filtering options: select all of your dimension with one click and then remove the dimensions you wish to filter out by deselecting these individual dimensions.\n\n\n\nBug Fixes\n\nTabular view (Display Issues)\n\nSearch integration\n\nSpecial character recognition\n\nFacet filter scalability\n\nMap View mishandling coordinates\n\nHighlighting function issues\n",
  id: 1
});
index.addDoc({
  title: "On Palladio - From our Lead Developer",
  author: "Ethan Jewett",
  layout: "narrative",
  content: "\n\nRelease notes 2014-06-30\n\nRead Ethan’s post here\n\nIn this blog post, Lead Developer Ethan Jewett shares his thoughts about Palladio and its functions. (Note that Ethan’s post dates back to April 2014, just after we launched the Load and Save version of Palladio.)\n\n",
  id: 2
});
index.addDoc({
  title: "Palladio Release Notes: 0.6.0",
  author: "Ethan Jewett",
  layout: "narrative",
  content: "\nRelease notes 2014-07-31\n\n\n\nNew Features\n\nRedesign\n\nAn updated design across the application, including a new start page with extended explanations of functionality.\n\nTimeSpan filter component\n\nA new filter type is introduced that allows visualization and filtering of records based on a start date and an end date. We offer 2 view options in this filter: a horizontal slope chart (the ‘Parallel’ subview), and a Gannt-like view (the ‘Bars ‘subview).\n\nList view changes, and export option\n\nThe list view has been reworked to provide a more guided experience, more intuitive display of multiple values, and an option to export the current display as a CSV. When navigating to the list view, a user must now choose a primary row dimension before any data is displayed. Additional dimensions can then be selected to display as informational columns. Columns can be reordered by dragging to change the order of the dimensions in the dimension selector.\n\nGraph view optimization\n\nThe graph view has been heavily optimized and should now allow for the display of 100’s of nodes with relatively smooth animation on most computers. Tip: If you want to speed up animation temporarily, try disabling display of labels and/or links in the settings panel.\n\nDimension chooser dialog updates\n\nThe modal dialog that allows selection of dimensions to display in several of the views has been revamped to be more compact. This should allow handling data sets with a larger number of dimensions without needing to scroll in this modal dialog.\n\nMap view “fixed-scale” option\n\nThe user has the option to set the scale of the map view. This scale will then remain the same when switching between dimensions displayed on the map, allowing a researcher to make valid scale comparisons across dimensions.\n\nRestrictions on facet filter dimensions removed\n\nPreviously there were restrictions on the dimensions available in the facet filter based on type of dimensions and the number of values in the dimension. These restrictions have been removed, so it is possible to use any dimension in the facet filter. Some formatting issues remain, which we hope to address in the next release.\n\nBug Fixes\n\n\n  Graph view +/- buttons don’t work\n  Limit the length of the filter display (above the filters)\n  Timeline bug - timeline won’t display for some types of data\n  Changes in the Refine view don’t always trigger a refresh of data in visualizations\n  Timeline miscounts months sometimes (‘01’ is interpreted as February)\n\n\nKnown issues (incomplete list)\n\n\n  Timespan filter doesn’t display properly if data contains “end dates” that are before “start dates”\n  Graph view nodes can have 0-size in some circumstances\n  Start page design is not responsive\n  Firefox browser presents issues with loading and saving projects\n  Sorting data alphabetically within the list view does not work\n\n\nReporting issues\n\nIf you find issues or are having trouble getting your data to work in Palladio, please get in touch. This is an ongoing research project and we can use all the feedback we can get.\n\nOn Twitter: @HDStanford\nBy email: palladio@designhumanities.org\n",
  id: 3
});
index.addDoc({
  title: "Palladio Release Notes: 0.7.0",
  author: "Mark Braude",
  layout: "narrative",
  content: "\n\nRelease notes 2014-09-23\n\n\n\nThe 0.7.0 release of Palladio features an interface for querying SPARQL endpoints, as well as several bug fixes and enhancements, most specifically pertaining to the TimeLine and TimeSpan tools.\n\nNew Features\n\nSPARQL Support\n\nPalladio now offers SPARQL support, allowing the use of a SPARQL query to load data from a publicly available SPARQL endpoint. An incomplete list of SPARQL endpoints is available here.\nSPARQL loading capability is available on the initial data load as well as in the context of extending tables.\n\nBug Fixes and Enhancements\n\n\n  TimeSpan filter allows use of dimensions in any order (previously, the first dimension was required to have dates that always preceded the dates in the second dimension).\n  TimeLine filter now displays the current filter on the large timeline.\n  Initial data loading page now provides all loading options in a consistent tabbed interface.\n  Palladio no longer automatically adds ‘&amp;output=csv’ to Google spreadsheets links, allowing for the loading of any CSV that is available on a server that allows cross-site loading.\n\n",
  id: 4
});
index.addDoc({
  title: "Palladio Release Notes: 0.8.0",
  author: "Mark Braude",
  layout: "narrative",
  content: "\n\nRelease notes 2014-11-18\n\n\n\nNew Features\n\nThis release focuses on expanded Map View features. In response to your feedback, the Map View now handles different tile sets. Tile sets can be layered on top of one another and toggled as desired. This facilitates comparisons between historical and contemporary maps. In cases where a historical map only covers part of an area of interest, we can now see the rest of the area - either with a contemporary map, a different historical map, or a combination of the two.\n\nNew Map View Options:\n\n\n  \n    Use the current standard tile set for the map view, or choose from one of the new pre-loaded alternatives: Streets, Land, Terrain, Satellite, and Buildings and Areas.\n  \n  \n    Create your own custom tile set using mapbox.com and/or the Mapbox TileMill tool and use that tile set in Palladio using a Mapbox Project ID. Please see the Mapbox tutorial here\n  \n  \n    Use an OpenStreetMap(OSM)/Google formatted tile set URL, such as those provided by Stamen or the NYPL MapWarper project. Please see the URL-based tile set tutorial here\n  \n\n\nOther general features and changes:\n\n\n  \n    New, rewritten version of the Facet Filter, including better sorting and smoother interaction.\n  \n  \n    Extending fields (in the file upload and dimension view) now uses a pill-based selector rather than a drop-down. This change addresses several bugs that occurred with the previous drop-down-based approach.\n  \n  \n    Graph view is more stable during filtering, with fewer instances of nodes moving off-screen.\n  \n  \n    Dropbox integration. Host a file in a Dropbox public folder and create ‘public link.’ Paste that link directly into Palladio interface. Note that hosting data in a Dropbox public folder makes your data publicly accessible. To keep your data private, continue uploading your tabular data in the traditional manner.\n  \n  \n    Auto-load capability for hosted versions of Palladio. Put ‘auto-load.json’ in the Palladio save format in the Palladio root directory on your web server and it will be automatically loaded.\n  \n\n",
  id: 5
});
index.addDoc({
  title: "Palladio Release Notes: 0.9.0",
  author: "Mark Braude",
  layout: "narrative",
  content: "\n\nRelease notes 2015-01-27\n\n\n\nBug Fixes\n\n\n  Major performance fix to data load/processing.\n  Filters applied on facet filter dimensions don’t go away when the facet filter is removed (thanks to Christoph Kudella for the bug report).\n  Application was non-functional after refreshing while in the visualization view. Now fixed.\n  Changing table and dimension names in the data view did not update in the visualization view (thank you, again, Christoph!). Fixed.\n\n\nEnhancements\n\n\n  New Filter View Modes. We are refining and re-working the filter components (timeline and facet-filter) so that each has three view modes: small, medium, large. The ‘large’ view is comparable to one of the primary data views (map, graph, table, gallery) in that it functions as a display that can be filtered by time or facet.\n  Timeline Filter. The double-decker timeline is gone. The timeline filter is streamlined and elegant.\n  Timespan Filter. Now displays records that only have a start date or an end date as points.\n  Map Layers. Drag to order layers.\n  Map Layers. Sort order is reversed so that top layer is at the top of the list.\n  Facet filter. Indicates number of values in each facet.\n  Facet filter. Small bottom margin.\n\n\nNew Features\n\n\n  Expanded Timespan View.\n  Timespan tooltips.\n  Y-Axis Grouping.\n  Duration view.\n  Allow downloading of tables in the data view.\n  Multi-file support. One Palladio instance can host and load multiple save files based on the URL\n\n",
  id: 6
});
index.addDoc({
  title: "The Palladio 1.0 Release",
  author: "Nicole Coleman",
  layout: "narrative",
  content: "\n\nRelease notes 2015-06-12\n\nWe made it to 1.0 with a redesigned responsive interface and improvements all around.\n\n\nWe are very pleased to announce the release of Palladio 1.0. The most noticeable change is the interface redesign. Palladio’s user interface is now responsive and iPad compatible.\n\nThe map view has been re-vamped to support 3 layer types:\n\n\n  Tiles\n  Data\n  geoJSON\n\n\nThere are a number of other more subtle changes that will become apparent when you begin viewing your data in Palladio.\nAs always, if you have comments, questions, or suggestions, please pass them on. The research-driven design of this set of tools is its reason for being. We want to influence the design of data tools based on the needs of humanistic inquiry and we need your help to do that.\n\nFarewell\n\nOur 1.0 release of Palladio bears the distinctive imprint of our lead designer, Giorgio Caviglia. Giorgio is leaving us to take a position at Trifacta, but his influence is fundamental and will remain integral to the experience of Palladio.\n\n",
  id: 7
});
index.addDoc({
  title: "The Palladio 1.1 Release",
  author: "Nicole Coleman",
  layout: "narrative",
  content: "\n\nRelease notes 2015-10-21\n\n\n\nCheck out version 1.1\n\nEnhancements\n\n  General: We added a progress indicator to let you know when rendering is happening. Look for a swoosh around the Palladio “P” in the upper left corner.\n  Data Refine: Allow “ignore” option for special characters in the edit dimension view.\n  Data Refine: Red dot goes to gray for a reviewed/edited/verified dimension.\n  Map view: Allow the use of WMS URLS. YAY!!!\n  Map view: improvements to map data rendering time.\n  Map view: We have removed the ‘mouseclick to filter’ on the map points. We will be replacing this with a mouseclick for popover that will give more detailed information about a point on the map than we see in the tooltip.\n  Timespan: Add the group name to the tooltip.\n  Timespan: Highlight timespans on mouseover to clarify for which timespan the tooltip is displayed.\n  Timespan: Enable grouping of timespans by another dimension (hovering will highlight all spans related to a record if a span appears in more than one group due to a multi-value field).\n  Facet Filter: show ([number selected out of] / [total number]) for each dimension. We need to let people know at a glance how many of a thing they are seeing in a view. We can do this easily with FF instead of mucking up the interface with more information.\n  Facet Filter: Performance improvement in facet filter by using filterExact when possible.\n  Saving a project: Add date to metadata per project (more coming)\n  Saving a project: save files can reference external data (performance improvement). Including toggle option so that user can control if data is saved along with Palladio save file or is referenced in a remote location. Only available if file is loaded from URL, not if data is dragged or pasted into Palladio directly. Try putting the URL of a Dropbox file in your Public folder where you normally paste your data.\n  Saving a project: Now you can save a project from Safari browser! The save file name will be “Unknown.” You’ll need to rename it. At least the download works.\n\n\nBug Fixes\n\n  Timespan: The bar layout was displaying duplicate values.\n  Facet filter: fixed a bug where the clear/remove controls stopped appearing.\n  Map view: Fixed a bug that caused the legend graphics to appear squished.\n  Data Refine: We no longer flag the data format “Coordinates” for review because of commas and dashes.\n  Map View: At the request of our friends at Mapbox, we added Mapbox branding when using Mapbox tiles.\n  Saving a project: Fixed a bug where saving a project would kill links/extensions.\n  General: Fixed a bug where font-awesome drag icon was not appearing.\n  Facet Filter: Fixed a bug where adding a dimension triggered multiple updates, causing slowness.\n  Data Refine: For a while, if you needed to remove a table that was extended from the primary table in order to fix it and re-load it, the re-load would fail. That has been fixed.\n  Timespan Filter: Fixed a problem where filter settings were not saved with the Palladio save file (download).\n  Facet Filter: Fixed a display problem that caused dimensions to stack.\n  Timespan Filter: Fixed a problem where, if a filter is already in place when the timespan is added, then the filter is removed, the lines will overflow the view area.\n\n\n",
  id: 8
});
index.addDoc({
  title: "Release Notes",
  author: null,
  layout: "index",
  content: "\n",
  id: 9
});
index.addDoc({
  title: "Data tutorial",
  author: null,
  layout: "slide",
  content: "\n###Palladio Data\n\n\n\nYou can load data into Palladio in a number of ways.\nHere, we've dragged a .csv file into the box. You can also copy and paste your data, or type directly into the box.\n\n![1loadingfile.png](/ed/assets/resources/CCA953052BB0485A2C6F75A3D36E6A8E.png)\n\n\n\nData loaded from a file should look like this.\n\n![2loadingdata.png](/ed/assets/resources/9D91FDA048353B3B13A2C97B1EE3EAD0.png)\n\n\n\nWhen your data is initially loaded into Palladio, you may see a number of your data dimensions flagged for review with a red dot.\n\n![3initiallyloaded.png](/ed/assets/resources/5157C75F563570400BAA24D02BD3130E.png)\n\n\n\nClick on the dimension to review.\n![4search special characters.png](/ed/assets/resources/4127AF986D2E9C472B590710CBC4C0FA.png)\n\n\n\nHere, Palladio has flagged special characters that may or may not be intentional. Click on the character to filter the values and review them for accuracy. If you see a problem in your data, you can edit it outside of Palladio and reload the data. When you’ve checked each flagged character, the red dot will disappear. \n\n\nSometimes, your data may contain multiple values within one cell.\nIn this data, many pieces of art are made with more than one medium.\n\n![beforemult.png](/ed/assets/resources/C2FB570D1D5A1E9CA00BBE9B932E4D86.png)\n\n\n\nUse the Multiple Values Delimiter to let Palladio know these values should be read as separate entries. You can use any string as a delimiter so long as it is consistent within that dimension.\n![multiplevalues.gif](/ed/assets/resources/48807D71B21353E3B3E58AC76578FBF4.gif)\n\n\n\nUse the Edit Dimension view to see how often a value appears in your data.\nThe number on the side of each entry indicates its frequency.\n\n![8sort by frequency title.png](/ed/assets/resources/4810CBE2B5DFC39137CF50DF02EFD805.png)\n\n\n\nYou can also choose to sort your data by value.\n\n![9sort by value title.png](/ed/assets/resources/9D421AF6831270278BA65019A3CA6CB8.png)\n\n\n\nAnother way to review your data is to search for values within a dimension.\n\n![search.png](/ed/assets/resources/854D21D0E710EE8589CA86013AA9F55A.png)\n\n\n\nThe grey icons indicate that each dimension has been verified.\n\n![10after character review.png](/ed/assets/resources/6400D666F5026862AFB21FA0CA81538F.png)\n\n\n\nPalladio automatically assigns each dimension a data type.\nHere, you can see that Palladio reads “accession date” as a Number. \n\n![11see how it's a number.png](/ed/assets/resources/7547DC07F4491313547F5A8F516F45A5.png)\n\n\n\nClick to edit a dimension and change its data type. \n\n![12change to date.png](/ed/assets/resources/0BCE4A9AAC2A352F125A47C2A75F0B64.png)\n\n\n\nIf there is a dimension of your data that you do not want to include in your Palladio project, you can disable it. \nDisabled dimensions can be enabled again at any time. \n\n![disable.png](/ed/assets/resources/056E2763B326F15431F9D7C99B10C9C0.png)\n\n\n\nAdd titles to your tables and data.\n\n![13changed.png](/ed/assets/resources/D19BA137C6F48C3B37FB4208B3D8E8AF.png) \n\n\n\nOnce you’ve finished the review process, it may be helpful to download your Palladio project to simply upload for future use.\n\nPalladio does not store your data, so each project lasts only as long as your browser session unless you download it. \n\n\n\n\n###Notes:\n\nThe review process can be skipped entirely, but it is important to review your data before beginning your Palladio project. \n\nPalladio needs to be able to read your data types properly in order to use features like mapping coordinates or filtering by timeline and timespan. \n\nThe multiple values delimiter and special characters search can help you make sure your data is as clean as possible before the Palladio visualization process. \n\n\n\n\n###Palladio Data\n\n",
  id: 10
});
index.addDoc({
  title: "Graph tutorial",
  author: null,
  layout: "slide",
  content: "\n###Palladio Graph\n\nPalladio offers a bivariate graph to show associations between two different dimensions. The default is a simple force-directed layout. The strength of Palladio in investigating these associations comes with pairing the graph view with our different filters.\n\n\n\n\nAny of your data dimensions can become a source or target dimension for the graph.\n\n![14graph choose dimension.png](/ed/assets/resources/2F65EC5790FE3AF18DBA47F04EC8CE1D.png)\n\n\n\n\n \nGraphed data looks like this.\n\n![15graph.png](/ed/assets/resources/ECB32BBCF0EE91485AB38D9D448CF31D.png)\n\n\n\n\nIn that example, the darker nodes belong to the target dimension (medium) because the Highlight box is checked. Note that the nodes with more connections are by default more centrally oriented in the graph view and those with fewer or no connections are on the periphery.\n\n\n\n\n\nYou can size nodes according to their connectedness in your data.\n\n![16graph sized nodes.png](/ed/assets/resources/5B482FABA921EBA41941312368B4B7E5.png)\n\n\n\n\n\nOrient your graph spatially by dragging and dropping nodes across the screen.\n\n![FxpAEPPoka.gif](/ed/assets/resources/74F059E732FEA95A2721ADE4F9FC60DF.gif)\n\n\n\n\n\nInvestigate multiple dimensions of the data using interactive filters like the Facet Filter shown below.\n\n![graphfacet.png](/ed/assets/resources/6373BADED3C53CA276E9B834B0FD6A1D.png)\n\n\n\n ##To learn more about using the Timeline, Timespan, and Facet Filters, see our separate tutorials. \n\n\n\nYou can also visualize the growth of a single data dimension.\n\n![FCle4zPixL.gif](/ed/assets/resources/6B15FBC90E2DB5BEB094ED96F732C1EB.gif)\n\n\n\n\n\nThe filters that you apply carry over to other Palladio views.\n\n![tabulargraph.png](/ed/assets/resources/CBE90A4E4FE42C41D7AA803B0B3ACF2A.png)\n\n\n\n\nTo save your graph, download it as a .svg file. \n\n![downloadgraph.png](/ed/assets/resources/C8376390D5EC21AE1EC1D682287C2E18.png) \n\n\n\n\n\nYour .svg file can then be edited in a vector graphics editor like Adobe Illustrator or Inkscape.\n\n![downloaded.png](/ed/assets/resources/14FA2FEC1C20F7E68E0CB3E6E96DFB38.png)\n\n\n\n \n//see other tutorials or go home\n\n##[Exit](/ed/)\n",
  id: 11
});
index.addDoc({
  title: "Tutorials",
  author: null,
  layout: "index",
  content: "\n",
  id: 12
});
index.addDoc({
  title: "Map tutorial",
  author: null,
  layout: "slide",
  content: "\n###Palladio Map\n\n\n\nWe’ll start with point data.\n\n![30map options.png](/ed/assets/resources/5A3846927D024894D37E6A396668BCED.png)\n\n\n\nThe data will show up on your map like this. \n\n![31mapped.png](/ed/assets/resources/00BA080F3C2DF8142A59378963EFF091.png)\n\n\n\nYou can see specific data points by hovering.\n\n![32map tooltip.png](/ed/assets/resources/ACEB29FD9A03E241D2D9EEEDCCAB77E5.png)\n\n\n\nEdit your data layers by clicking on the edit button. \n\n![35edit layers.png](/ed/assets/resources/83494BF8FE69BD6E5090B85188DCC4C5.png)\n\n\n\nYou can specify which dimension is used to label the points (tooltip). \n\n![maptooltip.png](/ed/assets/resources/28F5DDECBD221F652EA463AFD48DD750.png)\n\n\n\nWhen we first plotted the points, they were sized by items per location. If we uncheck that option, we can focus our attention on the unique locations.\n\n![30map options.png](/ed/assets/resources/E0AF5F4DFC95F23BE188ADF9168FF081.png)\n\n\n\nUnsized data looks like this. \n\n![37without sized points.png](/ed/assets/resources/244B25A8F4D53E17B012ABE2620B5DC1.png)\n\n\n\nThere are a number of basemap layers to choose from. \n\n![33tile options.png](/ed/assets/resources/108B514DAF2A8C712D3AF96C9B8BA504.png)\n\n\n\n We’ve added satellite imagery as a tile layer.\n\n![34map satellite.png](/ed/assets/resources/934C949BBAB271B8654B67D5B2777765.png)\n \n\n\nInvestigate multiple dimensions of the data using interactive filters like the Timeline shown below. \n\n![mapp.gif](/ed/assets/resources/AE31F2F0A339E999C9CE37CDF4377321.gif)\n\n\n ##To learn more about using the Timeline, Timespan, and Facet Filters, see our separate tutorials. \n\n\nAnother mapping option is Point to Point, which requires two sets of place data (birthplaces and deathplaces in this example).\n\n![pointtopoint.png](/ed/assets/resources/950AEF62535A106279774B4F8476C2C1.png)\n\n\n\nHere you can see the paths between birthplace (source) and death place (target). The clockwise arc of the line indicates the direction of the relationship.\n\n![clockwise.png](/ed/assets/resources/8954CD1F7BF12B9A3B8B5E4F98C983CA.png)\n\n\n\nYou can add multiple data layers and choose the color.\n\n![color.png](/ed/assets/resources/801B2F0DD1C3BB2D398A6196847E4095.png)\n\n\n\nIn this map, we’ve assigned red to birthplaces to more easily distinguish them from death places.\n![differentcolors.png](/ed/assets/resources/8F3258BFFFA6C39FF3890A6A5FB037F9.png)\n\nWith this view, you can more easily follow the arc between birthplace and death place.\n\n\n\n![viewbothzoom.png](/ed/assets/resources/BBCF15BF46A367EF19ACD00AA485BAB6.png)\n\n\n###Palladio Map\n\n",
  id: 13
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Palladio FAQs",
  "author": null,
  "layout": "narrative",
  "link": "/texts/FAQs/FAQs/",
}
,{
  "title": "Palladio Release: Load and Save",
  "author": "Mark Braude",
  "layout": "narrative",
  "link": "/texts/releasenotes/2014-04-16/",
}
,{
  "title": "On Palladio - From our Lead Developer",
  "author": "Ethan Jewett",
  "layout": "narrative",
  "link": "/texts/releasenotes/2014-06-30/",
}
,{
  "title": "Palladio Release Notes: 0.6.0",
  "author": "Ethan Jewett",
  "layout": "narrative",
  "link": "/texts/releasenotes/2014-07-31/",
}
,{
  "title": "Palladio Release Notes: 0.7.0",
  "author": "Mark Braude",
  "layout": "narrative",
  "link": "/texts/releasenotes/2014-09-23/",
}
,{
  "title": "Palladio Release Notes: 0.8.0",
  "author": "Mark Braude",
  "layout": "narrative",
  "link": "/texts/releasenotes/2014-11-18/",
}
,{
  "title": "Palladio Release Notes: 0.9.0",
  "author": "Mark Braude",
  "layout": "narrative",
  "link": "/texts/releasenotes/2015-01-27/",
}
,{
  "title": "The Palladio 1.0 Release",
  "author": "Nicole Coleman",
  "layout": "narrative",
  "link": "/texts/releasenotes/2015-06-12/",
}
,{
  "title": "The Palladio 1.1 Release",
  "author": "Nicole Coleman",
  "layout": "narrative",
  "link": "/texts/releasenotes/2015-10-21/",
}
,{
  "title": "Release Notes",
  "author": null,
  "layout": "index",
  "link": "/texts/releasenotes/index/",
}
,{
  "title": "Data tutorial",
  "author": null,
  "layout": "slide",
  "link": "/texts/tutorials/data/",
}
,{
  "title": "Graph tutorial",
  "author": null,
  "layout": "slide",
  "link": "/texts/tutorials/graph/",
}
,{
  "title": "Tutorials",
  "author": null,
  "layout": "index",
  "link": "/texts/tutorials/index/",
}
,{
  "title": "Map tutorial",
  "author": null,
  "layout": "slide",
  "link": "/texts/tutorials/map/",
}
]

//Query 

$(document).ready(function() {
  $('input#search').on('keyup', function () {
	var resultdiv = $('#results');
	var query = $(this).val();
 
  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  resultdiv.append('<p class="">Found '+result.length+' result(s)</p>');
  //Loop through, match, and add results
  for (var item in result) {
	var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/ed'+store[ref].link+'">'+store[ref].title+'</a> by '+store[ref].author+'</p></div>';
    resultdiv.append(searchitem);
   }
  });
});
