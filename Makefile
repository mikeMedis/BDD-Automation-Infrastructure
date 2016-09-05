run_all_in_parallel:
	make -j test_Windows8.1_firefox_40 test_OSX_El_Capitan_chrome_52

test_Windows8.1_firefox_40:
	browserName=firefox version= platform="Windows 8.1" mvn test

test_OSX_El_Capitan_chrome_52:
browserName=chrome version=52.0 platform="OS X 10.11" mvn test