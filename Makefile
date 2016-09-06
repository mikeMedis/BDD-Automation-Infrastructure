run_all_in_parallel:
	make -j test_Windows10_firefox_44

test_Windows10_firefox_44:
	browserName=firefox version=44 platform="Windows 10" mvn test

