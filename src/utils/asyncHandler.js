// const asyncHandler = () => {} // Normal arrow function
// const asyncHandler = () => (() => { }) // return a function
// const asyncHandler = () => (async () => { }) // return a async function


// const asyncHandler = (fn)=> async (req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         next(error)    
//     }
// } 

const asyncHandler = (fn) =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => next(error))
    }

export { asyncHandler }
