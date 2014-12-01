Fall 2014 Hackbright Final Project: SnowBase
============================================

<h2>Overview:</h2>
<p></p>
<ul><li>SnowBase connects winter backcountry enthusiasts to the most up to date snow pack conditions with one click.</li>
<li>For those who are eagerly awaiting new snow, easy-to-use text alerts are available for over 860 SnoTel mountain stations.</li>
<li>Data generated by the USDA's SnoTel network is brought to life on a daily basis through the Powderlin.es API, database, mapping, texting and data visualization technologies.</li></ul>

<p></p>
<h2>Technologies:</h2>
<p></p>
<ul><li>SQLite</li>
<li>Python</li>
<li>Flask</li>
<li>SQLAlchemy</li>
<li>JavaScript</li>
<li>jQuery</li>
<li>d3</li>
<li>Bootstrap</li>
<li>HTML/CSS</li>
<li>Powderlin.es SnoTel API</li>
<li>Google Maps API</li>
<li>Twilio API</li></ul>

<p></p>
<h2>Table of Contents:</h2>
<p></p>
<strong>Cron</strong>: Contains reference and scripts that are used to create files used for cron jobs, and the cron job scripts.
<p></p>
<ul><li>create_station_json.py: Creates a csv file of all of the stations, including the station triplet needed for the API url.</li>
<li>create_urls.py: Creates a file of all API urls needed to call in a complete set of telemetry data.</li>
<li>json_cron.py: Calls all station APIs and saves a file of json objects. Runs daily.</li>
<li>parsed_cron.py: Calls all station APIs and saves a csv file of parsed data from each station. Runs daily.</li>
<li>StationJSON: File of json objects from each station.</li>
<li>stationsTriplets.csv: File of station triplets used to create API urls.</li>
<li>APIurls.csv: csv file of API urls for all stations.</li>
<li>APIurls_short.csv:  short csv file of API urls for testing purposes.</li>
<li>KEY: Key for parsing the output from the parsed_cron.py file.</li>
<li>Various csv files are included as sample output</li></ul>

<p></p> 
<strong>MVC</strong>: Contains flask app files, and reference/scripts needed to create the database of stations and snow telemetry data points.
<p></p>
<ul><li>requirements.txt: Requirements for virtual environment.</li>
<li>finder.py: Flask app for simple capture of lat/long, returns closest stations with data.</li>
<li>haversine.py: Computation for distance between two points given lat/long for each.</li>
<li>static and template folders: contain files for view rendering</li>
<li>model.py:  Create data tables, or add to data tables</li>
<li>seed.py: Seed table using reference file and/or by calling station APIs</li>
<li>add.py: Add snow telemetry data to existing database.</li>
<li>alerts.py: Administers Twilio alerts
<li>scan.py: Scans database for alerts, updates alert settings
<li>SnowDataParsed2014-11-08-0152Z.csv: Used to seed tables</li>
<li>Snow.db: Including db, for running finder.py</li></ul>
  

