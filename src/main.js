import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import store from './store';
import { Image as VanImage } from 'vant';
import { 
  Icon,
  Button,
  Tab, 
  Tabs,
  TreeSelect, 
  Stepper, 
  ActionBarButton,
  ActionBarIcon,
  ActionBar, 
  Checkbox,
  CheckboxGroup,
  SubmitBar,
  ContactCard,
  Card,
  Dialog,
  AddressList,
  AddressEdit,
  Collapse, 
  CollapseItem,
  Tag,
  Swipe, 
  SwipeItem,
  Form,
  Field,
  CellGroup
} from 'vant';
import router from './router/index';
import './common/css/base.less';

const app = createApp(App);
app
  .use(Icon)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(TreeSelect)
  .use(Stepper)
  .use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(ContactCard)
  .use(Card)
  .use(SubmitBar)
  .use(Dialog)
  .use(AddressList)
  .use(AddressEdit)
  .use(Collapse)
  .use(CollapseItem)
  .use(Tag)
  .use(Swipe)
  .use(SwipeItem)
  .use(VanImage)
  .use(Form)
  .use(Field)
  .use(CellGroup);
app.use(router);
app.use(store);
app.mount('#app');
