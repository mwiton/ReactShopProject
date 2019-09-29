import sys, os

directory = sys.argv[1]
componentname = sys.argv[2]
directory = directory + '/' + componentname

os.mkdir(directory)
file = open(directory+'/'+componentname+'.component.jsx', 'w')
file.write("import React from 'react';\n")
file.write("import './{}.styles.scss'\n\n".format(componentname))
file.write("const {} = () => (\n".format(componentname.capitalize()))
file.write("    <div className='{}'>\n".format(componentname))
file.write("    </div>\n")
file.write(");\n")
file.write("\n")
file.write("export default {};\n".format(componentname.capitalize()))
file.close()

cssFile = open(directory+'/'+componentname+'.styles.scss', 'w')
cssFile.write(".{} {\n".format(componentname))
cssFile.write("\n")
cssFile.write("}\n")
cssFile.close()