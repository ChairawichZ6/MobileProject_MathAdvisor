import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";

const Conic = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>เรขาคณิตวิเคราะห์</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;บทนี้จะศึกษาเกี่ยวกับจุดและรูปทรงต่าง ๆ ใน 2 มิติ โดยเริ่มจาก
            {"\n"}
            ระยะห่างระหว่างจุด ให้จุด (x1, y1) และ (x2, y2) อยู่บนระนาบ x – y
            ดังรูป
          </Text>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
            }}
            source={require("../assets/graph3.png")}
          />
          <Text style={styles.text}>
            ระยะห่างระหว่างจุด (x1, y1) และ (x2, y2)
            จะหาได้จากการใช้ทฤษฎีบทพีทาโกรัส ได้ว่า
          </Text>
          <Image
            style={{
              width: 300,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/sol1.png")}
          />
          <Text style={styles.text}>
            ข้อสังเกต{"\n"}
            &ensp;ถ้า x1 = x2 แสดงว่า จุดทั้งสองอยู่ในแนวเส้นตรงที่ขนานกับแกน y
            {"\n"}
            จึงได้ว่า ระยะห่างระหว่างสองจุดนั้น = |y1 – y2|{"\n"}
            &ensp;ถ้า y1 = y2 แสดงว่า จุดทั้งสองอยู่ในแนวเส้นตรงที่ขนานกับแกน x
            {"\n"}
            จึงได้ว่า ระยะห่างระหว่างสองจุดนั้น = |x1 – x2|{"\n"}
            {"\n"}
            ตัวอย่างโจทย์ จงหาระยะห่างระหว่าจุด (1,2) และ (4,6){"\n"}
          </Text>
          <Image
            style={{
              width: 400,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../assets/con1.png")}
          />
          <Text style={styles.text}>
            จุดกึ่งกลางระหว่างสองจุด ถ้าจุด (x, y) เป็นจุดกึ่งกลางระหว่างจุด
            (x1, y1) และ (x2, y2) ดังรูป
          </Text>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
            }}
            source={require("../assets/graph4.png")}
          />
          <Text style={styles.text}>
            แสดงว่า x เป็นค่ากึ่งกลางของ x1 และ x2 และ y เป็นค่ากึ่งกลางของ y1
            และ y2 จะได้ว่า
          </Text>
          <Image
            style={{
              width: 300,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/sol2.png")}
          />
          <Text style={styles.text}>ความชันของเส้นตรง</Text>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
            }}
            source={require("../assets/graph5.png")}
          />
          <Text style={styles.text}>
            ข้อสังเกต{"\n"}
            &ensp;ถ้าความชันเป็นบวก เส้นตรงจะทำมุมแหลมกับแกน x
            เมื่อวัดมุมทวนเข็มนาฬิกา{"\n"}
            &ensp;ถ้าความชันเป็นลบ เส้นตรงจะทำมุมป้านกับแกน x
            เมื่อวัดมุมทวนเข็มนาฬิกา{"\n"}
            &ensp;ถ้า x1 = x2 เส้นตรงจะขนานกับแกน y ซึ่งความชันจะหาค่าไม่ได้
            {"\n"}
            &ensp;ถ้า y1 = y2 เส้นตรงจะขนานกับแกน x ซึ่งความชันจะเท่ากับศูนย์
            {"\n"}
            {"\n"}
            ตัวอย่างโจทย์ จงหาความชันของเส้นตรงที่ผ่านสองจุดต่อไปนี้ (-7, -3)
            และ (-13, -6)
          </Text>
          <Image
            style={{
              width: 400,
              height: 235,
              alignSelf: "center",
            }}
            source={require("../assets/con2.png")}
          />
          <Text style={styles.text}>
            เส้นขนานและเส้นตั้งฉาก{"\n"}
            &ensp;เส้นตรงที่ไม่ขนานกับแกน y จะขนานกันก็ต่อเมื่อมีความชันเท่ากัน
            {"\n"}
            &ensp;เส้นตรงที่ขนานกับแกน y จะขนานกับเส้นตรงที่ขนานกับแกน y
            เส้นอื่น ๆ ด้วย{"\n"}
            &ensp;เส้นตรงที่ไม่ขนานกับแกน y
            จะตั้งฉากกันก็ต่อเมื่อมีความชันคูณกันได้เท่ากับ -1{"\n"}
            &ensp;เส้นตรงที่ขนานกับแกน y จะตั้งฉากกับเส้นตรงที่ขนานแกน x{"\n"}
            {"\n"}
            ความสัมพันธ์ซึ่งมีกราฟเป็นเส้นตรง{"\n"}
            ให้ (x, y) เป็นจุดใด ๆ บนเส้นตรงที่ไม่ขนานกับแกน y และลากผ่านจุด
            (x1, y1) และ (x2, y2) จะได้สมการเส้นตรงนี้ คือ
          </Text>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
            }}
            source={require("../assets/graph6.png")}
          />
          <Text style={styles.text}>
            ถ้าให้เส้นตรงที่มีความชัน m ตัดแกน y ที่จุด (0, c) จะมีสมการเส้นตรง
            คือ
          </Text>
          <Image
            style={{
              width: 300,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/sol3.png")}
          />
          <Text style={styles.text}>
            เรียก c ว่าระยะตัดแกน y{"\n"}
            และจะได้จุดตัดแกน x คือจุดที่ y = 0 จะได้ว่า
          </Text>
          <Image
            style={{
              width: 300,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/sol4.png")}
          />
          <Text style={styles.text}>
            ดังนั้น จุดตัดแกน x คือ ((-c/m), 0){"\n"}
            เรียก (-c/m) ว่าระยะตัดแกน x{"\n"}
            {"\n"}
            ข้อสังเกต{"\n"}
            &ensp;สมการเส้นตรงที่ขนานกับแกน x จะมีสมการเป็น y = c โดยที่ c
            เป็นค่าคงที่ใด ๆ{"\n"}
            &ensp;สมการเส้นตรงที่ขนานกับแกน y จะมีสมการเป็น x = k โดยที่ k
            เป็นค่าคงที่ใด ๆ{"\n"}
            &ensp;เราสามารถหาสมการเส้นตรงใด ๆ ที่ไม่ขนานกับแกน y ได้
            จากการแก้สมการ หรือระบบสมการ ของสมการเส้นตรง y = mx + c
            จากเงื่อนไขที่กำหนดมา{"\n"}
            &ensp;ถ้าเส้นตรงผ่านจุด (a, b) แสดงว่าจุด (a, b) อยู่บนเส้นตรงนั้น
            จะได้ว่า b = ma + c{"\n"}
            {"\n"}
            โจทย์ตัวอย่าง จงหาสมการเส้นตรงที่มีความชันเท่ากับ -7 และผ่านจุด (0,
            -5)
          </Text>
          <Image
            style={{
              width: 400,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../assets/con3.png")}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>ภาคตัดกรวย</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;บทนี้จะเรียนเกี่ยวกับรูปร่างต่าง ๆ
            ที่เกิดจากการตัดทรงกรวยด้วยระนาบหนึ่ง โดยการตัดทำมุมต่าง ๆ กัน
            จะทำให้ได้รอยเฉือนรูปร่างต่าง ๆ ได้แก่ วงกลม, วงรี, พาราโบลา
            และไฮเพอร์โบลา{"\n"}
            {"\n"}
            &emsp;ซึ่งคุณสมบัติของรูปร่างต่าง ๆ เหล่านี้
            สามารถนำไปประยุกต์ใช้ในชีวิตประจำวันได้ โดยเฉพาะในทางวิทยาศาสตร์
            และดาราศาสตร์{"\n"}
            {"\n"}
            วงกลม{"\n"}
            นิยามของวงกลม คือ เซตของจุดที่มีระยะห่างจากจุด ๆ หนึ่ง
            (จุดศูนย์กลางของวงกลม) เป็นระยะเท่า ๆ กัน จะได้ว่า ทุก ๆ
            จุดบนวงกลมจะมีระยะห่างจากจุดศูนย์กลางเท่ากับรัศมี
          </Text>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
            }}
            source={require("../assets/graph7.png")}
          />
          <Text style={styles.text}>
            สมการวงกลม กลมที่มีจุดศูนย์กลางอยู่ที่จุด (h, k) และมีรัศมียาว r
            หน่วย จะมีสมการ คือ
          </Text>
          <Image
            style={{
              width: 300,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/sol5.png")}
          />
          <Text style={styles.text}>
            แต่สมการวงกลมสามารถเขียนได้อีกแบบดังนี้{"\n"}
            จาก (x-h)^2 + (y-k)^2 = r^2{"\n"}
            {"\n"}
            จะได้ x^2 – 2hx + h^2 + y^2 – 2ky + y^2 = r^2{"\n"}
            {"\n"}
            x^2 + y^2 – 2hx – 2ky + h^2 + y^2 – r^2 = 0{"\n"}
            {"\n"}
            ให้ A = -2h, B = -2k, C = h^2 + k^2 – r^2{"\n"}
            {"\n"}
            จะได้รูปทั่วไปของสมการวงกลม คือ{"\n"}
            x^2 + y^2 + Ax + By + C = 0{"\n"}
            {"\n"}
            วงรี{"\n"}
            นิยามของวงรี ให้ F1 และ F2 เป็นจุดใด ๆ จุด P ใด ๆ
            บนวงรีจะมีผลบวกของระยะจากจุดนั้นไปยังจุด F1 และ F2
            เป็นค่าคงที่ค่าหนึ่งเสมอ โดยที่ค่าคงที่นี้มีค่ามากกว่าระยะ F1F2
            หรือก็คือ F1P + F2P = k โดยที่ k {">"} F1F2 สำหรับทุกจุด P บนวงรี
            เรียกจุด F1 และ F2 ว่า จุดโฟกัส และเรียก k ว่า ผลบวกคงตัว
          </Text>
          <Image
            style={{
              width: 400,
              height: 350,
              alignSelf: "center",
            }}
            source={require("../assets/graph8.png")}
          />
          <Text style={styles.text}>
            ส่วนประกอบของวงรี กราฟวงรีที่จะศึกษาในตอนนี้มี 2 แบบ ดังนี้
          </Text>
          <Image
            style={{
              width: 400,
              height: 235,
              alignSelf: "center",
            }}
            source={require("../assets/graph9.png")}
          />
          <Text style={styles.text}>
            ส่วนประกอบของวงรี มีดังนี้{"\n"}
            1. จุดศูนย์กลางวงรี (จากรูปคือจุด C(h, k)) คือ
            จุดกึ่งกลางระหว่างจุดโฟกัสทั้งสองจุด กำหนดให้
            จุดโฟกัสทั้งสองห่างจากจุดศูนย์กลาง c หน่วย จะได้ว่า
            จุดโฟกัสทั้งสองห่างกัน 2c หน่วย{"\n"}
            ถ้าวงรีเป็นแนวนอน จะได้ว่าจุดโฟกัสคือ (h ± c, k){"\n"}
            ถ้าวงรีเป็นแนวตั้ง จะได้ว่าจุดโฟกัสคือ (h, k ± c){"\n"}
            {"\n"}
            2. แกนเอก (จากรูปคือเส้นตรง V1,V2) คือ
            ส่วนของเส้นตรงที่มีจุดปลายอยู่บนวงรี และลากผ่านจุดโฟกัสทั้งสองจุด
            กำหนดให้ แกนเอกยาว 2a หน่วย{"\n"}
            {"\n"}
            3. จุดยอดของวงรี (จากรูปคือจุด V1 และ V2) คือ จุดปลายของแกนเอก
            จะเห็นว่า ผลบวกคงตัว จะมีค่าเท่ากับความยาวแกนเอก = 2a หน่วย{"\n"}
            ถ้าวงรีเป็นแนวนอน จะได้ว่าจุดยอดคือ (h ± a, k){"\n"}
            ถ้าวงรีเป็นแนวตั้ง จะได้ว่าจุดยอดคือ (h, k ± a){"\n"}
            จุดกึ่งกลางระหว่างจุดยอดทั้งสองจุด คือ จุดศูนย์กลางวงรี{"\n"}
            {"\n"}
            4. แกนโท (จากรูปคือเส้นตรง B1B2) คือ
            ส่วนของเส้นตรงที่มีจุดปลายอยู่บนวงรี โดยตั้งฉากกับแกนเอก
            และผ่านจุดศูนย์กลางวงรี กำหนดให้ แกนโทยาว 2b หน่วย ดังนั้น
            จุดกึ่งกลางระหว่างจุดปลายของแกนโท คือ จุดศูนย์กลางวงรี{"\n"}
            {"\n"}
            5. เส้นเลตัสเรกตัม (Latus Rectum) (คือ เส้นประทั้งสองเส้น
            ในรูปวงรีแนวนอน และวงรีแนวตั้ง) คือ ส่วนของเส้นตรงที่มีจุดปลาย
            อยู่บนวงรี(คอร์ดของวงรี) โดยตั้งฉากกับแกนเอก และผ่านจุดโฟกัส{"\n"}
            {"\n"}
            6. ค่าความเยื้องศูนย์กลางของวงรี (e) คือ ค่าที่บอกความรีของวงรี โดย
            e = c/a{"\n"}
            ค่า e มีค่าอยู่ในช่วง (0, 1){"\n"}
            ถ้า e มีค่าเข้าใกล้ 1 วงรีจะรีมาก{"\n"}
            ถ้า e มีค่าเข้าใกล้ 0 วงรีจะรีน้อย{"\n"}
            {"\n"}
            สมการวงรี
          </Text>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
            }}
            source={require("../assets/sol6.png")}
          />
          <Text style={styles.text}>
            โจทย์ตัวอย่าง วงรีที่มีสมการเป็น (x+1)^2/25 + (y+2)^2/16 = 1{"\n"}
            เป็นวงรีแนวนอน หรือแนวตั้ง ?{"\n"}
            หาจุดศูนย์กลางวงรี ?{"\n"}
            จุดโฟกัส ความยาวแกนเอก ?{"\n"}
            จุดยอดของวงรี ?{"\n"}
            ความยาวแกนโท ?{"\n"}
            ความยาวของเส้นเลตัสเรกตัม ?{"\n"}
            ค่าความเยื้องศูนย์กลางของวงรีนี้ ?{"\n"}
          </Text>
          <Image
            style={{
              width: 400,
              height: 310,
              alignSelf: "center",
            }}
            source={require("../assets/con4.png")}
          />
          <Text style={styles.text}>
            พาราโบลา{"\n"}
            นิยามของพาราโบลา ให้ L เป็นเส้นตรงใด ๆ และ F เป็นจุดใด ๆ
            ที่ไม่อยู่บนเส้นตรง L จุด P ใด ๆ บนพาราโบลาจะมีระยะห่างจากเส้นตรง L
            เท่ากับ ระยะห่างจากจุด F เรียกจุด F ว่า จุดโฟกัสของพาราโบลา
            และเรียกเส้นตรง L ว่า เส้นไดเรกตริกซ์ ส่วนประกอบของพาราโบลา{"\n"}
            {"\n"}
            กราฟพาราโบลาที่จะศึกษามี 4 แบบ ดังนี้
          </Text>
          <Image
            style={{
              width: 400,
              height: 400,
              alignSelf: "center",
            }}
            source={require("../assets/graph10.png")}
          />
          <Text style={styles.text}>
            ส่วนประกอบของพาราโบลา มีดังนี้{"\n"}
            1. จุดยอด (จากรูปคือ V(h, k)) คือ
            จุดที่แบ่งครึ่งส่วนของเส้นตรงที่ลากจากจุดโฟกัสไปตั้งฉากกับเส้นไดเรกตริกซ์
            ให้ระยะห่างระหว่างจุดโฟกัสกับจดยอดเท่ากับ a
            จะได้ระยะห่างระหว่างจุดโฟกัสกับเส้นไดเรกตริกซ์เท่ากับ 2a{"\n"}
            {"\n"}
            2. แกนสมมาตร คือ เส้นตรงที่ตั้งฉากกับเส้นไดเรกตริกซ์ และผ่านจุดโฟกัส
            และจะผ่านจุดยอดด้วย แกนสมมาตรจะแบ่งกราฟพาราโบลาออกเป็น 2
            ส่วนที่สมมาตรกัน{"\n"}
            {"\n"}
            3. เส้นเลตัสเรกตัม (จากรูปคือ เส้นประ) คือ
            ส่วนของเส้นตรงที่มีจุดปลายอยู่บนพาราโบลา และลากผ่านจุดโฟกัส
            และขนานกับเส้นไดเรกตริกซ์ เส้นเลตัสเรกตัมยาวเท่ากับ 4a{"\n"}
            {"\n"}
            ตารางแสดงส่วนประกอบของพาราโบลา
          </Text>
          <Image
            style={{
              width: 400,
              height: 105,
              alignSelf: "center",
            }}
            source={require("../assets/table1.jpg")}
          />
          <Text style={styles.text}>
            สมการของพาราโบลา{"\n"}
            &ensp;พาราโบลาหงาย จะมีสมการ คือ (x – h)^2 = 4a(y – k){"\n"}
            &ensp;พาราโบลาคว่ำ จะมีสมการ คือ (x – h)^2 = -4a(y – k){"\n"}
            &ensp;พาราโบลาตะแคงขวา จะมีสมการ คือ (y – k)^2 = 4a(x – h){"\n"}
            &ensp;พาราโบลาตะแคงซ้าย จะมีสมการ คือ (y – k)^2 = -4a(x – h){"\n"}
            โจทย์ตัวอย่าง จงบอกลักษณะกราฟ จุดยอด จุดโฟกัส เส้นไดเรกตริกซ์
            แกนสมมาตร ความยาวของเส้นเลตัสเรกตัม
            และจุดปลายของเส้นเลตัสเรกตัมของพาราโบลาที่มีสมการเป็น{"\n"}
            y^2 = -4x – 4
          </Text>
          <Image
            style={{
              width: 400,
              height: 210,
              alignSelf: "center",
            }}
            source={require("../assets/con5.png")}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFC768",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
  },
  row: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D91200",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Conic;