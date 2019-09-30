import sys, os

directory = sys.argv[1]
componentName = sys.argv[2]
directory = directory + '/' + componentName

os.mkdir(directory)
file = open(directory+'/'+componentName+'.component.jsx', 'w')
file.write("import React from 'react';\n")
file.write("import './{}.styles.scss'\n\n".format(componentName))
file.write("const {} = () => (\n".format(componentName.capitalize()))
file.write("    <div className='{}'>\n".format(componentName))
file.write("    </div>\n")
file.write(");\n")
file.write("\n")
file.write("export default {};\n".format(componentName.capitalize()))
file.close()

cssFile = open(directory+'/'+componentName+'.styles.scss', 'w')
cssFile.write(".{} {}\n".format(componentName, '{'))
cssFile.write("\n")
cssFile.write("}\n")
cssFile.close()