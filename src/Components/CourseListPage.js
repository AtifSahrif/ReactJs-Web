import { useHistory, useLocation, useParams, useRouteMatch } from "react-router";
import style from './cssStyleModule.module.css';
const CourseListPage = () => {
    const { courseid } = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    console.log(courseid);
    console.log(location);
    console.log(history);
    console.log(match);
    return (
        <div className={style.fonttext}>
            <p> Course List Page</p>
            {location.pathname === '/course' &&
                <button onClick={() => { history.push("/home") }}>Click Me</button>
            }

        </div>
    );
}








// class CourseListPage extends Component {
//     render() {
//         return (
//             <div className={style.fonttext}>Course List Page</div>
//         );
//     }
// }

export default CourseListPage;