# LAP6_talent-trace

## About The Project 

Snapshot is an innovative feature designed to integrate seamlessly with the Communiti platform. This tool empowers new tech graduates and career transitioners to showcase their skills and competencies in a clear, concise, and visually appealing format. With Snapshot, users can create a polished skill overview with versatile sharing options, to distribute their accomplishments via URL, PDF, or JPEG formats. This flexibility ensures that users can easily present their skills across various platforms and mediums. Additionally, Snapshot caters to employers and recruiters by providing a comprehensive view of candidates' abilities through the created snapshots, streamlining the talent evaluation process and enabling more informed hiring decisions.

## Tech Stack

* Frontend
    * React + Vite
    * JavaScript
    * HTML
    * SASS
    * Shadcn/ui component library

* Backend 
    * Firebase

## Project Goals

* Enable users to create a polished career snapshot in under 5 minutes, reducing profile creation effort by 50%
* Allow users to share their accomplishments via URL, PDF or JPEG
* Enable employers and recruiters to view candidates abilities through their snapshots

## Environment Setup

Create a `.env` file in the root directory with the following variables: 

```ini
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

```

Variables can also be found within the .env.sample file.

## Getting Started

### Installation

1. Clone the repository
2. Install the dependencies

    ```bash
    npm install
    ```

### Development

Run your local development server with:

```bash
    npm run dev
```

## Project Resources