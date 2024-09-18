import pandas as pd

excel_file_path = 'Quarterly Exam Result 2024.xlsx'
df = pd.read_excel(excel_file_path)

json_data = df.to_json(orient='records', indent=4)

json_file_path = 'data.json'
with open(json_file_path, 'w') as json_file:
    json_file.write(json_data)