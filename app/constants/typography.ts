import { Colors } from "./colors";
import { TextStyle } from "react-native";


//Interface för att title, subtitle och body ska fungera med TextStyle

interface TypographyInterface {
  fsTitle: number,
  fsSubtitle: number,
  fsBody: number,
  title: TextStyle,
  subTitle: TextStyle,
  body: TextStyle,
}

export const Typography: TypographyInterface = {
  fsTitle: 26,
  fsSubtitle: 17,
  fsBody: 15,

  title: {
    fontSize: 26,
    fontFamily: 'Courier',
    color: Colors.light,
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica ',
    color: Colors.light,
    textAlign: 'center',
  },

  body: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: Colors.light,
    textAlign: 'center',
  },
};
