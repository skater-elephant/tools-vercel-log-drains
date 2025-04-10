This is a template for a Vercel Log Drains Explorer web application. It is built with Next.js and [Tinybird](https://tinybird.co).

This is a fork of the [Logs Explorer Template](https://github.com/tinybirdco/logs-explorer-template) with some modifications to make it work with Vercel Log Drains.

Fork it and make it your own!

## Set up the project

Fork the GitHub repository and deploy the data project to Tinybird.

```bash
# select or create a new workspace
tb login

# deploy the template
tb --cloud deploy https://github.com/tinybirdco/vercel-log-drains-template/tree/main/tinybird

# copy the dashboard token
tb --cloud token copy read_pipes
```

Deploy the project to [Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftinybirdco%2Fvercel-log-drains-template&project-name=vercel-log-drains-template&repository-name=vercel-log-drains-template&demo-description=Custom%20logs%20explorer%20for%20your%20application%20logs%20using%20Tinybird&demo-url=http%3A%2F%2Flogs.tinybird.app&demo-image=//github.com/tinybirdco/vercel-log-drains-template/blob/main/dashboard/log-analyzer/public/banner.png?raw=true&root-directory=dashboard/log-analyzer) to get started quickly.

Configure these Environment Variables in your Vercel project and you are ready to go:

```bash
NEXT_PUBLIC_TINYBIRD_API_KEY=<YOUR_TINYBIRD_READ_PIPES_TOKEN>
NEXT_PUBLIC_TINYBIRD_API_URL=<YOUR_TINYBIRD_REGION_HOST>
```

Get your Tinybird `read_pipes` token and region host from the [Tinybird dashboard](https://cloud.tinybird.co/tokens).

## Instrumenting your Vercel Log Drains

Go to Vercel Dashboard and configure your Log Drains:

- Choose your team scope on the dashboard, and go to **Team Settings > Log Drains**.
- Select the **Projects** to send logs to Tinybird.
- Select **Sources** you want to send logs to Tinybird.
- Select **NDJSON** as Delivery Format.
- Select **Environments** and **Sampling Rate**.
- Set this URL `<YOUR_TINYBIRD_REGION_HOST>/v0/events?name=logs&x-vercel-verify=<your-x-vercel-verify-token>`
- Select **Custom Headers**, add `Authorization` with the value `Bearer <YOUR_TINYBIRD_ADMIN_TOKEN>` and select **Add**.
- Select **Verify** and create the Log Drain.

## Local Development

Get started by forking the [GitHub repository](https://github.com/tinybirdco/vercel-log-drains-template) and then customizing it to your needs.

Start Tinybird locally:

```bash
curl -LsSf https://tbrd.co/fwd | sh
cd tinybird
tb local start
tb login
tb dev
token ls  # copy an admin token
```

Configure the Next.js application:

```bash
cd dashboard/log-analyzer
cp .env.example .env
```

Edit the `.env` file with your Tinybird API key and other configuration.

```bash
NEXT_PUBLIC_TINYBIRD_API_KEY=<YOUR_TINYBIRD_LOCAL_ADMIN_TOKEN>
NEXT_PUBLIC_TINYBIRD_API_URL=http://localhost:7181
```

Start the Next.js application:

```bash
cd dashboard/log-analyzer
npm install
npm run dev
```

Open the application in your browser:

```bash
http://localhost:3000
```

Read the [dashboard/log-analyzer/README.md](./dashboard/log-analyzer/README.md) file for more information on how to use the application and [tinybird/README.md](./tinybird/README.md) for more information on how to customize the template.

## Deployment

Deploy the Tinybird project to the cloud:

```bash
cd tinybird
tb --cloud deploy
```

Once deployed copy your Tinybird cloud host and `read_pipes` token, [deploy the Next.js application to Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftinybirdco%2Fvercel-log-drains-template&project-name=vercel-log-drains-template&repository-name=vercel-log-drains-template&demo-description=Custom%20logs%20explorer%20for%20your%20application%20logs%20using%20Tinybird&demo-url=http%3A%2F%2Flogs.tinybird.app&demo-image=//github.com/tinybirdco/vercel-log-drains-template/blob/main/dashboard/log-analyzer/public/banner.png?raw=true&root-directory=dashboard/log-analyzer) and configure the environment variables.


