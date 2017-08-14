<?php

use \Twig_Filter_Function as Twig_Filter_Function;
use \Twig_Filter_Method as Twig_Filter_Method;

class TwigExtension extends \Twig_Extension
{
    public function __construct()
    {
    }

    public function getFunctions()
    {

        return array(
            'time_ago' => new \Twig_Function_Function(function($datetime){
                $now = new DateTime;
                $ago = new DateTime($datetime);
                $diff = $now->diff($ago);

                $diff->w = floor($diff->d / 7);
                $diff->d -= $diff->w * 7;

                $string = array(
                    'y' => 'an',
                    'm' => 'mois',
                    'w' => 'semaine',
                    'd' => 'jour',
                    'h' => 'heure',
                    'i' => 'minute',
                    's' => 'seconde',
                );
                foreach ($string as $k => &$v) {
                    if ($diff->$k) {
                        $v = $diff->$k . ' ' . $v . ($diff->$k != 2 && $k !== 'm' ? 's' : '');
                    } else {
                        unset($string[$k]);
                    }
                }
                
                $string = array_slice($string, 0, 1);
                return $string ? 'il y a ' . implode(', ', $string) : 'A l\'instant';
            })
        );
    }

    public function getName()
    {
        return 'twig_extension';
    }
}

?>
