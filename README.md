## magazine - spa

In order to have a better documentation to setup this project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### About docker

## Build project using docker

To build the project using docker you can run this command.

### `docker build -t magazine-spa .`

To run the project using docker yo can run this command

### `docker run -p 80:80 magazine-spa`

## SSL Configuration

The application supports both SSL and non-SSL configurations:

### 🔒 Production with SSL (Let's Encrypt)

When deploying to production with SSL certificates, mount the Let's Encrypt certificates:

```bash
docker run -p 80:80 -p 443:443 \
  -v /path/to/letsencrypt:/etc/letsencrypt \
  -v /path/to/certbot/www:/var/www/certbot \
  magazine-spa
```

### 🌐 Development without SSL

For development or when SSL certificates are not available, the container will automatically run in HTTP-only mode:

```bash
docker run -p 80:80 magazine-spa
```

## SSL Certificate Management

### Initial certificate generation

To generate initial certificates using certbot:

```bash
docker run --rm \
  -v $(pwd)/letsencrypt:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot certonly \
  --webroot --webroot-path=/var/www/certbot \
  --email your-email@domain.com \
  --agree-tos --no-eff-email \
  -d revista.repositoriounipol.com
```

### renew ssl

run this command inside the deployment directory:  
`root@ip-172-31-14-141:/home/ubuntu/deploy/deployment/development# `
```bash
docker run --rm \
  -v $(pwd)/letsencrypt:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot renew \
  --webroot --webroot-path=/var/www/certbot
```

### Docker Compose Example

For production deployment with SSL:

```yaml
version: '3.8'
services:
  webapp:
    image: unipolrepositorio/magazine:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./letsencrypt:/etc/letsencrypt:ro
      - ./certbot/www:/var/www/certbot:rw
    restart: unless-stopped
```

## Troubleshooting

- **Container keeps restarting**: Check if SSL certificates exist. The container automatically falls back to HTTP-only mode if certificates are missing.
- **SSL errors**: Verify certificate paths and permissions.
- **Port conflicts**: Ensure ports 80 and 443 are available on the host.