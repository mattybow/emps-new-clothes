export default function promiseMiddleware(client, appendPromise){
  return (next) => (action) => {
    const { promise, types, ...rest} = action;
    if(!promise){               //if there's no promise key, dispatch
      return next({...rest});
    }
    const [REQUEST, SUCCESS, FAIL] = types;
    next({...rest, type:REQUEST});
    var invokedPromise = promise(client).then(
      (result) => next({...rest, type:SUCCESS, ...result}),
      (error) => next({...rest, type:FAIL, error:error})
    );
    if(__SERVER__){
      appendPromise(invokedPromise);
    }
  }
}