import pandas as pd 
file_path = r"C:\Users\rudra\Downloads\convert (1).xlsx"
df = pd.read_excel(file_path)
find = input( )
fil = df[(df['d1'] == find) | (df['d2'] == find) | (df['d3'] == find)]
hospital = fil['name']
print(hospital)
