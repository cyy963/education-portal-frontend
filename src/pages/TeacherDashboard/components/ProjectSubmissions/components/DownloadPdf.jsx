import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import styling from "../ProjectSubmissions.module.css";
// Create styles
const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    //the pdf viewer will take up all of the width and height
    width: window.innerWidth / 1.2,
    height: window.innerHeight / 1.2,
  },
  image: {
    width: 500,
  },
});

export default function DownloadPdf({ setDisplay, projects }) {
  let pronoun;
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
            <Page size="A4">
              <View style={styles.section}>
                <Text>PROJECTS</Text>
              </View>
              {projects.map((project, index) => {
                if (project.gender === 0) {
                  pronoun = "their";
                } else if (project.gender === 1) {
                  pronoun = "his";
                } else if (project.gender === 2) {
                  pronoun = "her";
                }
                return (
                  <View style={styles.section} key={index}>
                    <Text>
                      {project.student_name} submitted {pronoun} project.
                    </Text>
                    {project.submission && (
                      <Image style={styles.image} src={project.submission} />
                    )}
                  </View>
                );
              })}
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
}
