


<?php
// get city name from input , in js axios url
if($_GET['city'] !=NULL){
    $cityName = $_GET['city'];
    $apikey = "6eae1da7c517d33af017a696dbcc36f3"; //from openmapweather site
    // openmap api url with input value
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$cityName&appid=$apikey&units=metric";
    // initialize curl url session
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    curl_close($ch);
    $info = [
        'status' => 'ok',
        'data' => $response
    ];
    echo json_encode($info);
}
