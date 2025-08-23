import pandas as pd

def detect_duplicates_and_conflicts(df):
    # تنظيف أسماء الأعمدة من مسافات
    df.columns = df.columns.str.strip()

    print("أسماء الأعمدة في الملف:")
    print(df.columns.tolist())

    email_col = 'MIU Email'
    student_id_col = 'MIU University ID'
    full_name_col = 'Full Name'

    # تأكد إن الأعمدة موجودة
    for col in [email_col, student_id_col, full_name_col]:
        if col not in df.columns:
            raise KeyError(f"العمود '{col}' غير موجود في الملف.")

    # إنشاء أعمدة للملاحظات
    df['conflict'] = False
    df['notes'] = ''

    # إزالة التكرار حسب البريد الإلكتروني
    before = len(df)
    df = df.drop_duplicates(subset=[email_col], keep='first')
    print(f"تم حذف {before - len(df)} صفوف مكررة بناءً على البريد الإلكتروني")

    # الكشف عن نزاعات بيانات student_id
    grouped_id = df.groupby(student_id_col)
    for student_id, group in grouped_id:
        if len(group) > 1:
            names = group[full_name_col].unique()
            emails = group[email_col].unique()
            if len(names) > 1 or len(emails) > 1:
                idxs = group.index.tolist()
                df.loc[idxs, 'conflict'] = True
                df.loc[idxs, 'notes'] += "Conflict in student_id data; "

    # الكشف عن نزاعات بيانات البريد الإلكتروني
    grouped_email = df.groupby(email_col)
    for email, group in grouped_email:
        if len(group) > 1:
            names = group[full_name_col].unique()
            if len(names) > 1:
                idxs = group.index.tolist()
                df.loc[idxs, 'conflict'] = True
                df.loc[idxs, 'notes'] += "Conflict in email with different names; "

    return df


# Usage example (تأكد تغير المسار حسب مكان ملفك)
if __name__ == "__main__":
    merged_path = "data/merged_with_status_from_notebook.xlsx"
    df = pd.read_excel(merged_path)
    df_cleaned = detect_duplicates_and_conflicts(df)
    df_cleaned.to_excel("data/merged_cleaned.xlsx", index=False)
    print("✅ تم تنظيف البيانات واكتشاف النزاعات وحفظ الملف.")
