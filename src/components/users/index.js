import VisitorIcon from '@mui/icons-material/People';
import UserList from "./UserList";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserShow from "./UserShow";
import {ShowGuesser} from "react-admin";

export default {
    list: UserList,
    icon: VisitorIcon,
    create: UserCreate,
    edit : UserEdit,
    show : UserShow,
};