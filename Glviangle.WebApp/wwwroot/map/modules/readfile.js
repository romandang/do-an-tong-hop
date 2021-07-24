
export class File{
  data = {
    path: ""
  };
  constructor(op){
    const self = this;
    self.data.path = op.path
  }

  /**
 * writeTextFile write data to file on hard drive
 * @param  string  filepath   Path to file on hard drive
 * @param  sring   output     Data to be written
 */
  writeTextFile(output) {
    var txtFile = new File(this.data.path);
    txtFile.open("w"); //
    txtFile.writeln(output);
    txtFile.close();
  }

  /**
 * writeTextFile write data to file on hard drive
 * @param  string  filepath   Path to file on hard drive
 * @param  sring   output     Data to be written
 */
  writeTextFile(output) {
    var txtFile = new File(this.data.path);
    txtFile.open("w"); //
    txtFile.writeln(output);
    txtFile.close();
  }

  /**
   * readTextFile read data from file
   * @param  string   filepath   Path to file on hard drive
   * @return string              String with file data
   */
  readTextFile() {
    var str = "";
    var txtFile = new File(this.data.path);
    txtFile.open("r");
    while (!txtFile.eof) {
      // read each line of text
      str += txtFile.readln() + "\n";
    }
    return str;
  }
}