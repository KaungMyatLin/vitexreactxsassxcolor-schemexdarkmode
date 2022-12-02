import Img from 'next/image'
import classes from './404.module.css'

function NotFoundPage () {
    (
        <>
            <h1 className={classes.h1}>Page Not Found</h1>
            <Img ></Img>
        </>
    )
}

export default NotFoundPage