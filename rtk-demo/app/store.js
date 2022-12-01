const configureStore = require("@reduxjs/toolkit").configureStore
const reduxLogger = require("redux-logger")
const cakeReducer = require("../feature/cake/cakeSlice")
const iceCreameReducer = require("../feature/icecreame/IceCreameSlice")

const logger = reduxLogger.createLogger({})

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceCreameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store
