import sys, os

componentName = sys.argv[1]
directory = 'src/redux/' + componentName

os.mkdir(directory)
file = open(directory+'/'+componentName+'.actions.js', 'w')
file.write('import {} {}ActionTypes {} from "./{}.types";'.format('{', componentName.capitalize() ,'}', componentName))
file.close()
file = open(directory+'/'+componentName+'.reducer.jsx', 'w')
file.write('import {} {}ActionTypes {} from "./{}.types";\n'.format('{', componentName.capitalize(), '}', componentName))
file.write("\nconst INITIAL_STATE = {\n\n};\n")
file.write("\nconst {}Reducer = (state = INITIAL_STATE, action) => {}\n".format(componentName, '{'))
file.write("    return state;\n")
file.write("};\n")
file.write("\nexport default {}Reducer;\n".format(componentName))
file.close()
file = open(directory+'/'+componentName+'.types.js', 'w')
file.write("export const {}ActionTypes = {}\n".format(componentName.capitalize(), '{'))
file.write("\n};\n")
file.close()