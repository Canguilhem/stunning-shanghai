export default function (context){
    console.log(context)
    if( context.route.fullPath === '/admin'){
        console.log('are you admin ?')
    }else {
        console.log("dude you're not admin")
    }
}