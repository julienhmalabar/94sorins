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
            'example' => new \Twig_Function_Function(function($string){
                return $string;
            })
        );
    }

    public function getName()
    {
        return 'twig_extension';
    }
}

?>
