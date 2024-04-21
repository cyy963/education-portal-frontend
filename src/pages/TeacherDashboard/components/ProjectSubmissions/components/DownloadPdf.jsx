import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import styling from "../ProjectSubmissions.module.css";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    //the pdf viewer will take up all of the width and height
    width: window.innerWidth / 1.2,
    height: window.innerHeight / 1.2,
  },
});

export default function DownloadPdf({ setDisplay }) {
  const handleClick = () => {
    setDisplay(false);
  };
  return (
    <div className={styling.downloadContainer} onClick={handleClick}>
      <div className={styling.download}>
        <PDFViewer style={styles.viewer}>
          {/* Start of the document*/}
          <Document>
            {/*render a single page*/}
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>Hello</Text>
              </View>
              <View style={styles.section}>
                <Text>World</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
}
