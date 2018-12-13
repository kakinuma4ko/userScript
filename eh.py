//replace <url>
import re
import requests
import time

next_url = ['https://<url>']

while 1:
    url = next_url[0]
    print url
    html = requests.get(url).text
    div_3 = re.findall('<div id="i3">(.*?)<div id="i4">', html, re.S)
    pic_url = re.findall('<img id="img" src="(.*?)"', div_3[0], re.S)
    origin_url_ = re.findall('<div id="i7" class="if">(.*?)Download original', html, re.S)
    origin_url = re.findall('<a href="(.*?)">', origin_url_[0], re.S)

    # print html
    # print div_3
    # print pic_url
    # print origin_url

    pic = requests.get(pic_url[0], timeout=10)
    fp = open('./'+next_url[0].split('/')[len(next_url[0].split('/'))-1]+'.jpg', 'wb')
    fp.write(pic.content)
    fp.close()

    next_url_ = re.findall('<a onclick="return load_image(.*?)<img', div_3[0], re.S)
    next_url = re.findall('href="(.*?)"', next_url_[0], re.S)
    if url == next_url[0]:
        print 'END'
        exit(0)
    time.sleep(15)
