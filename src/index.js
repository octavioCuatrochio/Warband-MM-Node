import { QMainWindow, QWidget, QBoxLayout, QPixmap, QLabel, QPushButton, QIcon } from '@nodegui/nodegui';
import logo from '../assets/images/a.png';
import settings from '../assets/icons/settings.png';

const c_basic = "#222831";
const c_secondary = "#393E46";
const c_highlight = "#00ADB5";
const c_white = "#EEEEEE";
const WIDTH = 800;
const HEIGHT = 600;



const root = new QWidget();

root.setLayout(new QBoxLayout(2));
root.setObjectName("root");

const top = new QWidget(root);
top.setObjectName("top");
top.resize(WIDTH, 50);


// Solo el header...mamita querida
const headerContainer = new QWidget();
headerContainer.setLayout(new QBoxLayout(0));
headerContainer.resize(300, top.height());


const imgLabel = new QLabel();
imgLabel.resize(100, headerContainer.height() - 5);
const headerImage = new QPixmap();
headerImage.load(logo);
imgLabel.setPixmap(headerImage.scaled(imgLabel.width(), imgLabel.height(), 1));
imgLabel.setMinimumSize(100, headerContainer.height() - 5);

const headerText = new QLabel();
headerText.setText("Warband Mod Manager");
headerText.setObjectName("headerText");
headerText.setInlineStyle("");
headerText.resize(headerContainer.width(), headerContainer.height());

headerText.setParent(headerContainer);
imgLabel.setParent(headerContainer);
headerContainer.setParent(top);

const settingsBtn = new QPushButton();
settingsBtn.setIcon(new QIcon(settings));
settingsBtn.setParent(top);


root.setStyleSheet(`
  #root{
    background-color: ${c_basic};
  }
  #top {
    border-bottom: 2px solid ${c_highlight};
  }
  #headerText {
    font-size: 20px;
    font-weight:bold;
    color: ${c_white};
    margin-left:45px;
  }
`);

const win = new QMainWindow();
win.setWindowTitle("Warband Mod Manager");
win.resize(WIDTH, HEIGHT);
win.setCentralWidget(root);
win.show();
global.win = win;
