<?php

namespace App\Controller;

use App\Repository\RoomRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GetOnlyRoomsWithSAController extends AbstractController
{
    public function __construct(
        private RoomRepository $roomRepository
    ) {}

    public function __invoke(): array
    {
        return $this->roomRepository->getRoomWithSA();
    }
}
