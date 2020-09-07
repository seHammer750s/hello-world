#! C:¥xampp¥perl¥bin¥perl.exe

print "Content-type: text/html; charset=UTF-8¥n¥n";

# GET メソッドのパラメータを取得
$get = $ENV{'QUERY_STRING'};

# パラメータによって処理を振り分けて結果を返す
# print << "EOD1";　は、次の行から EOD1 の手前までをそのまま出力する
# （EOD1 は行の先頭に書かなければならない）
# 出力内容は JSON の書式に則っている
if($get eq "1")
{
print << "EOD1";
[
    {"index":"alert","contents":"警告ダイアログを表示します。"},
    {"index":"confirm","contents":"確認ダイアログを表示します。"}
    {"index":"prompt","contents":"入力ダイアログを表示します。"}
    {"index":"open","contents":"新しいウィンドウを開きます。"}
    {"index":"close","contents":"ウィンドウを閉じます。"}
]
EOD1
}
elseif($get eq "2"){
print << "EOD2";
[
    {"index":"open","contents":"ドキュメントを書き込み可能な状態にします。"},
    {"index":"close","contents":"ドキュメントへの書き込みを終了します。"}
    {"index":"write","contents":"ドキュメントに文字列などを書き込みます。"}
    {"index":"writeln","contents":"ドキュメントに文字列などを書き込んで改行します。"}
]
EOD2
}
elseif($get eq "3")
{
print << "EOD3";
[
    {"index":"back","contents":"ひとつ前のページを表示します。"},
    {"index":"next","contents":"次のページを表示します。"}
    {"index":"go","contents":"引数に指定した値分先のページを表示します。¥¥n 引数には負の値も指定できます。"}
]
EOD3
}