<h1 align="center">
    <div>
        <a href="https://maxun-website.vercel.app/">
            <img src="/src/assets/maxunlogo.png" width="50" />
            <br>
            Maxun
        </a>
    </div>
    Open-Source No-Code Web Data Extraction Platform <br>
</h1>

<p align="center">
Maxun lets you train a robot in 2 minutes and scrape the web on auto-pilot. Web data extraction doesn't get easier than this!
</p>


<p align="center">
    <a href="https://maxun-website.vercel.app/"><b>Website</b></a> |
    <a href="https://discord.gg/5GbPjBUkws"><b>Discord</b></a> |
    <a href="https://x.com/maxun_io"><b>Twitter</b></a> |
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbD2uhqC4sbg4eLZ9qrFbyrfkXZ2XsI6dQ0USRCQNZNn5pzg/viewform"><b>Join Maxun Cloud</b></a> | 
    <a href="https://www.youtube.com/@MaxunOSS"><b>Watch Tutorials</b></a>
    <br />
    <br />
<a href="https://trendshift.io/repositories/12113" target="_blank"><img src="https://trendshift.io/api/badge/repositories/12113" alt="getmaxun%2Fmaxun | Trendshift" style="width: 250px; height: 55px; margin-top: 10px;" width="250" height="55"/></a>
</p>


<img src="https://static.scarf.sh/a.png?x-pxid=c12a77cc-855e-4602-8a0f-614b2d0da56a" />

# Installation
1. First, create a file named `.env` in the root folder of the project
3. Choose your installation method below

### Docker Compose
2. Ensure you have setup the `.env` file
3. Run the command below
```
docker-compose up -d
```

### Without Docker
1. Ensure you have Node.js, PostgreSQL, MinIO and Redis installed on your system.
2. Run the commands below
```

# change directory to the project root
cd maxun

# install dependencies
npm install

# change directory to maxun-core to install dependencies
cd maxun-core 
npm install

# get back to the root directory
cd ..

# make sure playwright is properly initialized
npx playwright install
npx playwright install-deps

# get back to the root directory
cd ..

# start frontend and backend together
npm run start
```
You can access the frontend at http://localhost:5173/ and backend at http://localhost:8080/


# Environment Variables
1. Create a file named `.env` in the root folder of the project
2. Example env file can be viewed [here](https://github.com/getmaxun/maxun/blob/master/ENVEXAMPLE).

| Variable              | Mandatory | Description                                                                                  | If Not Set                                                   |
|-----------------------|-----------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| `BACKEND_PORT`            | Yes       | Port to run backend on. Needed for Docker setup                                          | Default value: 8080 |
| `FRONTEND_PORT`            | Yes       | Port to run frontend on. Needed for Docker setup                                        | Default value: 5173 |
| `BACKEND_URL`            | Yes       | URL to run backend on.                                                                    | Default value: http://localhost:8080 |
| `VITE_BACKEND_URL`            | Yes       | URL used by frontend to connect to backend                                           | Default value: http://localhost:8080 |
| `PUBLIC_URL`            | Yes       | URL to run frontend on.                                                                    | Default value: http://localhost:5173 |
| `VITE_PUBLIC_URL`            | Yes       | URL used by backend to connect to frontend                                           | Default value: http://localhost:5173 |
| `JWT_SECRET`          | Yes       | Secret key used to sign and verify JSON Web Tokens (JWTs) for authentication.                | JWT authentication will not work.                            |
| `DB_NAME`             | Yes       | Name of the Postgres database to connect to.                                                 | Database connection will fail.                               |
| `DB_USER`             | Yes       | Username for Postgres database authentication.                                               | Database connection will fail.                               |
| `DB_PASSWORD`         | Yes       | Password for Postgres database authentication.                                               | Database connection will fail.                               |
| `DB_HOST`             | Yes       | Host address where the Postgres database server is running.                                  | Database connection will fail.                               |
| `DB_PORT`             | Yes       | Port number used to connect to the Postgres database server.                                 | Database connection will fail.                               |
| `ENCRYPTION_KEY`      | Yes       | Key used for encrypting sensitive data (proxies, passwords).                                 | Encryption functionality will not work.                      |
| `MINIO_ENDPOINT`      | Yes       | Endpoint URL for MinIO, to store Robot Run Screenshots.                                      | Connection to MinIO storage will fail.                       |
| `MINIO_PORT`          | Yes       | Port number for MinIO service.                                                               | Connection to MinIO storage will fail.                       |
| `MINIO_CONSOLE_PORT`          | No       | Port number for MinIO WebUI service. Needed for Docker setup.                         | Cannot access MinIO Web UI. |
| `MINIO_ACCESS_KEY`    | Yes       | Access key for authenticating with MinIO.                                                    | MinIO authentication will fail.                              |
| `GOOGLE_CLIENT_ID`    | No       | Client ID for Google OAuth, used for Google Sheet integration authentication.                 | Google login will not work.                                  |
| `GOOGLE_CLIENT_SECRET`| No       | Client Secret for Google OAuth.                                                              | Google login will not work.                                  |
| `GOOGLE_REDIRECT_URI` | No       | Redirect URI for handling Google OAuth responses.                                            | Google login will not work.                                  |
| `REDIS_HOST`          | Yes       | Host address of the Redis server, used by BullMQ for scheduling robots.                     | Redis connection will fail. |
| `REDIS_PORT`          | Yes       | Port number for the Redis server.                                                            | Redis connection will fail. |
| `MAXUN_TELEMETRY`     | No        | Disables telemetry to stop sending anonymous usage data. Keeping it enabled helps us understand how the product is used and assess the impact of any new changes. Please keep it enabled. | Telemetry data will not be collected. |



# How Does It Work?
Maxun lets you create custom robots which emulate user actions and extract data. A robot can perform any of the actions: <b>Capture List, Capture Text or Capture Screenshot. Once a robot is created, it will keep extracting data for you without manual intervention</b>


## 1. Robot Actions
1. Capture List: Useful to extract structured and bulk items from the website. Example: Scrape products from Amazon etc.
2. Capture Text: Useful to extract individual text content from the website.
3. Capture Screenshot: Get fullpage or visible section screenshots of the website.

## 2. BYOP
BYOP (Bring Your Own Proxy) lets you connect external proxies to bypass anti-bot protection. Currently, the proxies are per user. Soon you'll be able to configure proxy per robot.


# Features
- ✨ Extract Data With No-Code
- ✨ Handle Pagination & Scrolling
- ✨ Run Robots On A Specific Schedule
- ✨ Turn Websites to APIs
- ✨ Turn Websites to Spreadsheets
- ✨ Adapt To Website Layout Changes (coming soon)
- ✨ Extract Behind Login, With Two-Factor Authentication Support (coming soon)
- ✨ Integrations (currently Google Sheet)
