import pandas as pd
file_path = r"C:\Users\rudra\Downloads\Medanta.xlsx"
df = pd.read_excel(file_path)
disease='Cancer'
result=[]
for index, row in df.iterrows():
    if row['disease']==disease:
        result.append(row['name'])
print(result)


