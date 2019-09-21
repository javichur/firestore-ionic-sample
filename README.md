# firestore-ionic-sample

## First steps

1. Create your Firesabe project and Firestore database <https://console.firebase.google.com>

2. Edit `firebase-credentials.js`.

3. Edit `userId` variable in `home.page.ts` for testing purposes.

## Sample Firestore structure

- users (Collection)
    -- user 1 (Document)
        ---- name (Field)
        ---- email (Field)
        ---- films (Sub-collection)
            ------ film 1 (Document)
                -------- title (Field)
                -------- year (Field)
                -------- synopsis (Field)
            ...
            ------ film N
    ...
    -- user N

## Secure your data in Firestore

<https://firebase.google.com/docs/firestore/security/get-started>
