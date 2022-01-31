This is a fun Facebook 2.0 project with Next.js and Firebase.

## Getting Started

First, intall the dependencies using the ```npm i``` command and set the corresponding identifiers in the following files:

*(You should sign in to Firebase and Facebook developer and create a new project onn each platform to get your ids)*

**firebase.js**
```
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
```

**.env.local**
```
FACEBOOK_ID=YOUR_APP_ID
FACEBOOK_SECRET=YOUR_APP_SECRET
NEXTAUTH_URL=http://localhost:3000
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
