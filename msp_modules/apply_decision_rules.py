def apply_decision_rules(df):
    # لو مفيش عمود status، نضيفه ونعين لكل الصفوف قيمة "Review" افتراضياً
    if 'status' not in df.columns:
        df['status'] = 'Review'
    else:
        df['status'] = df['status'].fillna('Review')
    
    # نضيف عمود message فاضي
    df['message'] = ''

    # قاعدة: لو الحالة accepted → رسالة تهنئة
    accepted_mask = df['status'].str.lower() == 'accepted'
    df.loc[accepted_mask, 'message'] = (
        "🎉 Congrats! You're accepted as a member. Kindly join the group."
    )

    # قاعدة: لو الحالة review → رسالة متابعة مع رقم للتواصل
    review_mask = df['status'].str.lower() == 'review'
    df.loc[review_mask, 'message'] = (
        "👉 If you are still interested, please send us a message on this number to schedule your interview: 📞 +20 123 456 7890"
    )

    return df
