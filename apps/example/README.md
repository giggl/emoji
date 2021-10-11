# `example`

This is an example project for usage of @giggl/emoji

### Projects notes:

- We need the .parcelrc to explicitly tell parcel to NOT use babel. Babel is required in the root of the projec tas preconstruct uses it to watch and compile packages. Parcel _can_ use babel, but we don't want it to for perf reasons. [Relavent docs](https://parceljs.org/languages/javascript/#babel)
