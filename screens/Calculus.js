import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";

const ConicSection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>แคลคูลัส</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;ลิมิตของฟังก์ชัน (Limit of a function){"\n"}
 1. ลิมิตของฟังก์ชัน เขียนแทนด้วย
</Text>
<Image
            style={{
              width: 200,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/lim1.png")}
          />
<Text style={styles.text}>
หมายถึง x มีค่าเข้าใกล้ a  แล้ว  f(x) จะมีค่าเข้าใกล้ L{"\n"}
สำหรับฟังก์ชัน y = f(x) ใดๆ ที่มีโดเมนและเรนจ์เป็นสับเซตของเซตจำนวนจริง{"\n"}
1.ลิมิตทางซ้ายของ f ที่ a คือ ค่าของ f(x) เมื่อ x มีค่าเข้าใกล้ a ทางซ้าย{"\n"}
2.ลิมิตทางขวาของ f ที่ a คือ ค่าของ f(x) เมื่อ x มีค่าเข้าใกล้ a ทางขวา{"\n"}
แล้วจะกล่าวได้ว่าฟังก์ชัน f ที่ a มีลิมิตเท่ากับ L{"\n"}
แล้วจะกล่าวได้ว่าฟังก์ชัน f ที่ a ไม่มีลิมิต{"\n"}
ลิมิตข้างเดียว  (One-side limit)
</Text>
<Image
            style={{
              width: 400,
              height: 350,
              alignSelf: "center",
            }}
            source={require("../assets/lim2.png")}
          />
          <Text style={styles.text}>
          ทฤษฎีบทเกี่ยวกับลิมิตของฟังก์ชัน{"\n"}
กำหนด a, A, B เป็นจำนวนจริงใดๆ ถ้า f และ g เป็นฟังก์ชัน
</Text>
<Image
            style={{
              width: 400,
              height: 400,
              alignSelf: "center",
            }}
            source={require("../assets/lim3.png")}
          />
          <Text style={styles.text}>
หมายเหตุ ฟังก์ชันโพลิโนเมียลคือฟังก์ชันที่มีเลขชี้กำลังของตัวแปรเป็นจำนวนเต็มบวก เช่น{"\n"}
f(x)  =  x^3 + 5x^2 – 6x + 3{"\n"}{"\n"}
วิธีหา ค่าลิมิตของฟังก์ชัน{"\n"}
1. เอาค่า a ไปแทนใน x ใน f(x) ถ้าผลที่ได้เป็นจำนวนจริงค่านั้นคือค่าลิมิต{"\n"}
2. เอาค่า a ไปแทนใน x ใน f(x)แล้วปรากฏผลออกมาในรูป{"\n"}
ให้พิจารณาลักษณะของฟังก์ชัน ดังนี้{"\n"}
2.1 ถ้าสามารถแยก f(x) ออกเป็นผลคูณของตัวประกอบได้ ก็ให้แยกแล้วขจัดตัวประกอบร่วมของเศษและส่วนออก หลังจากนั้นก็เอาค่า a ไปแทน x ถ้าผลที่ได้เป็นจำนวนจริง ค่านั้นคือค่าลิมิต{"\n"}
2.2 ถ้าแยกตัวประกอบไม่ได้ เนื่องจาก f(x) มักอยู่ในรูป root x{"\n"}
ก็ให้นำคอนจูเกตคูณทั้งเศษและส่วนแล้วขจัดตัวประกอบที่ทำให้ส่วนเป็นศูนย์ออก หลังจากนั้นก็เอาค่า a ไปแทน x ถ้าผลที่ได้เป็นจำนวนจริง ค่านั้นคือค่าลิมิต{"\n"}{"\n"}
ตัวอย่างการหาลิมิตของฟังก์ชัน{"\n"}
กำหนดให้ f(x) = 2x–3 จงหาค่าของ lim x→2 (2x-3) = (2(2)-3) = 1{"\n"}{"\n"}
2. ความต่อเนื่องของฟังก์ชัน{"\n"}
ในทางคณิตศาสตร์ตรวจสอบว่า f จะต่อเนื่องที่ x = a หรือไม่นั้น ต้องตรวจสอบจากคุณสมบัติ 3 ข้อต่อไปนี้{"\n"}
1. F(a) หาค่าได้{"\n"}
2. lim x→a f(x) หาค่าได้{"\n"}
3. lim x→a f(x) = f(a){"\n"}{"\n"}
การหาอนุพันธ์และอนุพันธ์{"\n"}
การหาอนุพันธ์ เป็นการคำนวณเพื่อที่จะได้มาซึ่งอนุพันธ์ อนุพันธ์ของฟังก์ชัน y = f(x) ของตัวแปร x คืออัตราที่ค่า y ของฟังก์ชันเปลี่ยนแปลงไปต่อการเปลี่ยนแปลงของตัวแปร x เรียกว่า อนุพันธ์ของ f เทียบกับ x ถ้า x และ y จำนวนจริง และถ้ากราฟของฟังก์ชัน f ลงจุดเทียบกับ x อนุพันธ์ก็คือความชันของเส้นกราฟในแต่ละจุด{"\n"}  
m=Δy/Δx Δ{"\n"}{"\n"}
กรณีที่ง่ายที่สุด นอกเหนือจากกรณีของฟังก์ชันคงตัว คือเมื่อ y เป็นฟังก์เชิงเส้นของ x ซึ่งหมายถึงกราฟของ y จะเป็นเส้นตรง ในกรณีนี้ y = f(x) = m x + b สำหรับจำนวนจริง m และ b และความชัน m ซึ่งกำหนดโดยการเปลี่ยนแปลงของ y หารด้วยการเปลี่ยนแปลงของ x ดังสมการ{"\n"}
เมื่อสัญลักษณ์ Δ (เดวตา) แทนคำว่า “การเปลี่ยนแปลง” สูตรนี้เป็นจริง เพราะว่า{"\n"}
y+Δy=f(x+Δx)=m(x+Δx)+b=mx+mΔx+b=y+mΔx{"\n"}
เพราะฉะนั้น จะได้ y+Δy=y+mΔx ทำให้ได้ Δy=mΔx
</Text>
<Image
            style={{
              width: 400,
              height: 250,
              alignSelf: "center",
            }}
            source={require("../assets/lim4.png")}
          />
          <Text style={styles.text}>
          ซึ่ง m เป็นค่าที่ถูกต้องของความชันของเส้นกราฟ ถ้าฟังก์ชัน f ไม่เป็นฟังก์ชันเชิงเส้น(กล่าวคือ กราฟของมันไม่เป็นเส้นตรง){"\n"}
          แล้วการเปลี่ยนแปลงของ y หารด้วยการเปลี่ยนแปลงของ x จะมีค่าแตกต่างกันออกไป{"\n"}
          การหาอนุพันธ์จึงเป็นวิธีการที่จะหาค่าที่ถูกต้องของอัตราการเปลี่ยนแปลงที่ค่าตัวแปรต้น x ใดๆ{"\n"}{"\n"}
อัตราส่วนเชิงผลต่าง{"\n"}
อนุพันธ์ของฟังก์ชัน f ที่ x ในเชิงเรขาคณิต คือ ความชันของเส้นสัมผัสของกราฟ f ที่ x{"\n"}
เราไม่สามารถหาความชันของเส้นสัมผัสจากฟังก์ชันที่กำหนดให้โดยตรงได้ เพราะว่าเรารู้เพียงจุดบนเส้นสัมผัสซึ่งก็คือ (x, f (x)) เท่านั้น{"\n"}
ในทางอื่นเราจะประมาณความชันของเส้นสัมผัสด้วยเส้นตัด(secant line) หลายๆเส้นที่มีจุดตัดทั้ง 2 จุดอยู่ห่างกันเป็นระยะทางสั้นๆ เมื่อหาลิมิตของความชันของเส้นตัดที่จุดตัดอยู่ใกล้กันมากๆ เราจะได้ความชันของเส้นสัมผัส{"\n"}
ดังนั้นอาจนิยามอนุพันธ์ว่าคือ ลิมิตของความชันของเส้นตัดที่เข้าใกล้เส้นสัมผัส{"\n"}
เพื่อหาความชันของเส้นตัดที่จุดตัดอยู่ใกล้กันมากๆ ให้ h เป็นจำนวนที่มีค่าน้อยๆ h จะแทนการเปลี่ยนแปลงน้อยๆ ใน x{"\n"}
ซึ่งจะเป็นจำนวนบวกหรือลบก็ได้ ดังนั้นความชันของเส้นที่ลากผ่านจุด (x, f(x)) และ(x+h, f(x+h)) คือ
</Text>
<Image
            style={{
              width: 200,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/lim5.png")}
          />
          <Text style={styles.text}>
          ซึ่งนิพจน์นี้ก็คือ อัตราส่วนเชิงผลต่างของนิวตัน(Newton’s difference quotient) อนุพันธ์ของ f ที่ x คือลิมิตของค่าของผลหารเชิงผลต่าง ของเส้นตัดที่เข้าใกล้กันมากๆจนเป็นเส้นสัมผัส:
</Text>
<Image
            style={{
              width: 400,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/lim6.png")}
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

export default ConicSection;
